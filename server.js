// 
import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function startServer() {
  const app = express();

  // Create Vite development server in middleware mode
  const vite = await createViteServer({
    server: { middlewareMode: "ssr" }
  });

  app.use(vite.middlewares);

  // Define route-based titles
  const routeTitles = {
    "/": "Home - Mac Buddy",
    "/about": "About - Mac Buddy",
    "/contact": "Contact - Mac Buddy",
  };

  app.use("*", async (req, res) => {
    try {
      const url = req.originalUrl;

      // Read the template HTML file
      let template = fs.readFileSync(path.resolve(__dirname, "index.html"), "utf-8");
      template = await vite.transformIndexHtml(url, template);

      // Load the React SSR render function
      const { render } = await vite.ssrLoadModule("/src/main.jsx");
      const appHtml = await render(url);

      // Get the title based on the current route
      const title = routeTitles[url] || "Mac Buddy";

      // Replace title dynamically
      template = template.replace(/<title>.*<\/title>/, `<title>${title}</title>`);

      // Inject the rendered app HTML
      const html = template.replace("<!--ssr-outlet-->", appHtml);

      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (error) {
      vite.ssrFixStacktrace(error);
      console.error(error);
      res.status(500).end(error.message);
    }
  });

  app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
  });
}

startServer();
