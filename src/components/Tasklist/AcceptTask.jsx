import React from 'react'

// const AcceptTask = ({data}) => {
//     return (
//       <div className="shrink-0 w-75 p-5 h-full bg-emerald-500 rounded-xl">
//         <div className="flex justify-between items-center">
//           <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
//             {data.category}
//           </h3>
//           <h4 className="text-sm">{data.date}</h4>
//         </div>
//         <h2 className="mt-5 text-3xl font-semibold">{data.title}</h2>
//         <p className="text-sm mt-2">{data.description}</p>
//         <div className="flex justify-between mt-4 ">
//           <button className="bg-blue-500 rounded font-medium py-1 px-2 text-sm">
//             mark as completed
//           </button>
//           <button className="bg-blue-500 rounded font-medium py-1 px-2 text-sm">
//             mark as failed
//           </button>
//         </div>
//       </div>
//     );
// }

// const AcceptTask = ({ data }) => {
//   return (
//     <div className="shrink-0 w-[320px] p-6 h-full bg-white/[0.03] border-l-4 border-emerald-500 rounded-2xl flex flex-col justify-between hover:bg-white/[0.05] transition-all">
//       <div>
//         <div className="flex justify-between items-center mb-4">
//           <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
//             {data.category}
//           </span>
//           <h4 className="text-zinc-500 text-sm font-medium">{data.date}</h4>
//         </div>
//         <h2 className="text-2xl font-semibold text-white leading-tight">
//           {data.title}
//         </h2>
//         <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
//           {data.description}
//         </p>
//       </div>

//       <div className="flex gap-3 mt-6">
//         <button className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-2 rounded-xl text-xs transition-all active:scale-95">
//           Complete
//         </button>
//         <button className="flex-1 bg-zinc-800 hover:bg-red-600 text-white font-semibold py-2 rounded-xl text-xs transition-all active:scale-95">
//           Failed
//         </button>
//       </div>
//     </div>
//   );
// };

const AcceptTask = ({ data }) => {
  return (
    <div className="shrink-0 w-[350px] p-7 h-full bg-white/[0.03] border-l-4 border-emerald-500 rounded-2xl flex flex-col justify-between hover:bg-white/[0.05] transition-all shadow-xl">
      <div>
        <div className="flex justify-between items-center mb-5">
          <span className="bg-emerald-500/10 text-emerald-400 text-xs font-bold px-3 py-1 rounded-lg uppercase tracking-wider">
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

      <div className="flex gap-3 mt-8">
        <button className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 rounded-xl text-xs transition-all active:scale-95 shadow-lg shadow-emerald-900/20">
          Mark as Completed
        </button>
        <button className="flex-1 bg-zinc-800 hover:bg-red-600 text-white font-bold py-2.5 rounded-xl text-xs transition-all active:scale-95">
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask
