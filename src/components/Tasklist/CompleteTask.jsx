// import React from 'react'

// const CompleteTask = ({data}) => {
//   return (
//     <div className="shrink-0 w-75 p-5 h-full bg-blue-500 rounded-xl">
//       <div className="flex justify-between items-center">
//         <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
//           {data.category}
//         </h3>
//         <h4 className="text-sm">{data.date}</h4>
//       </div>
//       <h2 className="mt-5 text-3xl font-semibold">{data.title}</h2>
//       <p className="text-sm mt-2">{data.description}</p>
//       <div className="mt-2">
//         <button className="bg-emerald-500 rounded font-medium py-1 px-2 text-sm w-full">
//           Completed
//         </button>
//       </div>
//     </div>
//   );
// }

// export default CompleteTask

import React from "react";

const CompleteTask = ({ data }) => {
  return (
    <div className="shrink-0 w-[300px] p-6 h-full bg-white/[0.03] border-l-4 border-blue-500 rounded-2xl flex flex-col justify-between hover:bg-white/[0.05] transition-all shadow-xl">
      <div>
        <div className="flex justify-between items-center mb-5">
          <span className="bg-blue-500/10 text-blue-400 text-xs font-bold px-3 py-1 rounded-lg uppercase tracking-wider">
            {data.category}
          </span>
          <h4 className="text-zinc-500 text-sm font-medium">{data.date}</h4>
        </div>
        <h2 className="text-2xl font-bold text-white mb-3 leading-tight">
          {data.title}
        </h2>
        <p className="text-zinc-400 text-sm leading-relaxed">
          {data.description}
        </p>
      </div>

      <div className="mt-8">
        <button className="w-full bg-blue-600/20 border border-blue-500/50 text-blue-400 font-bold py-2.5 rounded-xl text-xs transition-all cursor-default">
          Completed
        </button>
      </div>
    </div>
  );
};

export default CompleteTask;
