import React from "react";
import Card from "../components/Portfolio/Card";

const Portfolio = () => {
  return (
    <div
      name="portfolio"
      className="w-full h-full flex text-slate-50 bg-slate-900"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col md:flex w-full h-full bg-slate-900 bp1:mt-28">
        <div className="mb-10">
          {/* ----- PAGE Title ----- */}
          <p className="text-4xl font-bold inline border-b-4  border-amber-500">
            Projets
          </p>
        </div>
        <Card />
      </div>
    </div>
  );
};

export default Portfolio;

// {/* <div className="md:flex text-slate-50 bg-slate-900">
//   <div className="md:flex text-slate-50 bg-slate-900">
//     <Card sx={{ maxWidth: 500 }} className=" bg-slate-900 ">
//       {works?.map(({ id, title, img, desc, stack, demo, code }) => (
//         <div key={id} className="">
//           <CardMedia
//             component="img"
//             alt="green iguana"
//             image={img}
//             className="transition-all ease-in-out scale-110 hover:scale-110 duration-500 font-secondary"
//           />
//           <CardContent className="bg-slate-900 text-slate-50 mb-4">
//             <h5 className="bg-slate-900 text-slate-50 mt-2">{title}</h5>
//             <p className="bg-slate-900 text-slate-50">{desc}</p>

//             <p className="bg-slate-900 text-slate-50">{stack}</p>
//             <div className="w-3/5 m-auto mt-5 flex justify-between">
//               <button
//                 type="button"
//                 className=" text-xs flex items-center group border-2 px-2 py-1 font-bold border-amber-500 rounded-md tracking-widest transition-all ease-in-out duration-200 hover:bg-amber-600 hover:border-white active:bg-amber-50"
//               >
//                 <a href={demo} target="_blank" rel="noreferrer">
//                   DEMO
//                 </a>
//               </button>
//               <button
//                 type="button"
//                 className=" text-xs flex items-center group border-2 px-2 py-1 font-bold border-amber-500 rounded-md tracking-widest transition-all ease-in-out duration-200 hover:bg-amber-600 hover:border-white active:bg-amber-50"
//               >
//                 <a href={code} target="_blank" rel="noreferrer">
//                   CODE
//                 </a>
//               </button>
//             </div>
//           </CardContent>
//         </div>
//       ))}
//     </Card>
//   </div>
// </div>; */}
