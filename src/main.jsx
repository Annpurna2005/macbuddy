// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App";

export function render() {
  return <App />;
}

if (typeof document !== "undefined") {
  hydrateRoot(document.getElementById("root"), <App />);
  import("./index.css");

}
