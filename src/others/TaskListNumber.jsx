import React from 'react'

// const TaskListNumber = ({data}) => {
//   return (
//     <div className="flex mt-10 justify-between gap-5">
//       <div className="rounded-2xl border border-white/10 bg-orange-600 backdrop-blur-sm w-full py-6 px-9 hover:border-emerald-500/40 transition-all cursor-default">
//         <h2 className="text-4xl font-bold text-emerald-500">
//           {data.taskNumber.active}
//         </h2>
//         <h3 className="text-zinc-400 text-lg font-medium mt-1">Active Tasks</h3>
//       </div>

//       <div className="rounded-2xl border border-white/10 bg-green-600 backdrop-blur-sm w-full py-6 px-9 hover:border-emerald-500/40 transition-all cursor-default">
//         <h2 className="text-4xl font-bold text-emerald-500">
//           {data.taskNumber.active}
//         </h2>
//         <h3 className="text-zinc-400 text-lg font-medium mt-1">New Tasks</h3>
//       </div>

//       <div className="rounded-2xl border border-white/10 bg-blue-700 backdrop-blur-sm w-full py-6 px-9 hover:border-emerald-500/40 transition-all cursor-default">
//         <h2 className="text-4xl font-bold text-emerald-500">
//           {data.taskNumber.active}
//         </h2>
//         <h3 className="text-zinc-400 text-lg font-medium mt-1">Completed Task</h3>
//       </div>

//       <div className="rounded-2xl border border-white/10 bg-amber-500 backdrop-blur-sm w-full py-6 px-9 hover:border-emerald-500/40 transition-all cursor-default">
//         <h2 className="text-4xl font-bold text-emerald-500">
//           {data.taskNumber.active}
//         </h2>
//         <h3 className="text-zinc-400 text-lg font-medium mt-1">Failed Task</h3>
//       </div>
//     </div>
//   );
// }

const TaskListNumber = ({ data }) => {
  return (
    <div className="flex mt-10 justify-between gap-5">
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm w-full py-6 px-9 hover:border-pink-500/40 transition-all cursor-default shadow-lg">
        <h2 className="text-4xl font-bold text-pink-500">
          {data.taskNumber.newTask}
        </h2>
        <h3 className="text-zinc-400 text-lg font-medium mt-1">New Task</h3>
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm w-full py-6 px-9 hover:border-blue-500/40 transition-all cursor-default shadow-lg">
        <h2 className="text-4xl font-bold text-blue-400">
          {data.taskNumber.active}
        </h2>
        <h3 className="text-zinc-400 text-lg font-medium mt-1">Active Task</h3>
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm w-full py-6 px-9 hover:border-emerald-500/40 transition-all cursor-default shadow-lg">
        <h2 className="text-4xl font-bold text-emerald-400">
          {data.taskNumber.completed}
        </h2>
        <h3 className="text-zinc-400 text-lg font-medium mt-1">
          Completed Task
        </h3>
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm w-full py-6 px-9 hover:border-yellow-500/40 transition-all cursor-default shadow-lg">
        <h2 className="text-4xl font-bold text-yellow-500">
          {data.taskNumber.failed}
        </h2>
        <h3 className="text-zinc-400 text-lg font-medium mt-1">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumber
