const PageHeader = ({ pageTitle, pageRoute }) => {
     return (
       <div className="flex justify-between items-center bg-black text-white px-22 py-22">
         <h1 className="text-3xl font-bold">{pageTitle}</h1>
         <div>
           <button className="border-2 border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition">
             <a href="/" className="mr-2">Home</a> / 
             <a href={pageRoute} className="ml-2">{pageTitle}</a>
           </button>
         </div>
       </div>
     );
   };
   
   export default PageHeader;
   