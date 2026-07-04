// import React from 'react'

// const NewTask = ({data}) => {
//   return (
//     <div className="shrink-0 w-75 p-5 h-full bg-pink-500 rounded-xl">
//       <div className="flex justify-between items-center">
//         <h3 className="bg-red-600 text-sm px-3 py-1 rounded">{data.category}</h3>
//         <h4 className="text-sm">{data.date}</h4>
//       </div>
//       <h2 className="mt-5 text-3xl font-semibold">{data.title}</h2>
//       <p className="text-sm mt-2">
//         {data.description}
//           </p>
//           <div className='mt-4'>
//               <button>Accept Task</button>
              
//           </div>
//     </div>
//   );
// }

// export default NewTask

import React from "react";

const NewTask = ({ data }) => {
  return (
    <div className="shrink-0 w-[300px] p-6 h-full bg-white/[0.03] border-l-4 border-pink-500 rounded-2xl flex flex-col justify-between hover:bg-white/[0.05] transition-all shadow-xl">
      <div>
        <div className="flex justify-between items-center mb-5">
          <span className="bg-pink-500/10 text-pink-400 text-xs font-bold px-3 py-1 rounded-lg uppercase tracking-wider">
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
        <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 rounded-xl text-xs transition-all active:scale-95 shadow-lg shadow-emerald-900/20">
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
