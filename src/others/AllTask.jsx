import React, { useContext } from 'react'
import {AuthContext} from '../../context/AuthProvider'

// const AllTask = () => {

//   const [userData, setUserData] = useContext(AuthContext);
  

//   return (
//     <div className="bg-[#1c1c1c] p-5  rounded mt-5 overflow-auto">
//       <div className="bg-blue-950 mb-2  py-2 px-4 flex justify-between rounded ">
//         <h2 className="text-lg font-bold w-1/5">Employee Name</h2>
//         <h3 className="text-lg font-bold w-1/5"> New Task</h3>
//         <h5 className="text-lg font-bold w-1/5">Active </h5>
//         <h5 className="text-lg font-bold w-1/5">Completed</h5>
//         <h5 className="text-lg font-bold w-1/5">Failed</h5>
//       </div>

//       <div className=' overflow-auto'>
//         {userData.map(function (elem,idx) {
//           return (
//             <div key={idx}  className="bg-blue-500 border-2 mb-2  py-2 px-4 flex justify-between rounded ">
//               <h2 className="text-lg font-semibold w-1/5 text-blue-950">{elem.firstname}</h2>
//               <h3 className="text-lg font-semibold w-1/5 text-blue-800">{elem.taskNumber.newTask} </h3>
//               <h5 className="text-lg font-semibold w-1/5 text-blue-800">{elem.taskNumber.active}</h5>
//               <h5 className="text-lg font-semibold w-1/5 text-blue-800">{elem.taskNumber.completed}</h5>
//               <h5 className="text-lg font-semibold w-1/5 text-blue-800">{elem.taskNumber.failed}</h5>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  // return (
  //   <div className="bg-white/2 border border-white/10 p-6 rounded-3xl mt-5">
  //     {/* Header Row */}
  //     <div className="mb-4 py-3 px-6 flex justify-between rounded-xl opacity-60">
  //       <h2 className="text-xs font-bold w-1/5 text-white uppercase tracking-widest">
  //         Employee
  //       </h2>
  //       <h3 className="text-xs font-bold w-1/5 text-white uppercase tracking-widest text-center">
  //         New
  //       </h3>
  //       <h5 className="text-xs font-bold w-1/5 text-white uppercase tracking-widest text-center">
  //         Active
  //       </h5>
  //       <h5 className="text-xs font-bold w-1/5 text-white uppercase tracking-widest text-center">
  //         Done
  //       </h5>
  //       <h5 className="text-xs font-bold w-1/5 text-white uppercase tracking-widest text-center">
  //         Failed
  //       </h5>
  //     </div>

  //     <div className="space-y-3 max-h-100 overflow-y-auto custom-scrollbar">
  //       {userData.map((elem, idx) => (
  //         <div
  //           key={idx}
  //           className="bg-white/1 border border-white/5 hover:bg-white/4 transition-all py-4 px-6 flex justify-between rounded-2xl items-center"
  //         >
  //           <h2 className="text-lg font-semibold text-white w-1/5">
  //             {elem.firstname}
  //           </h2>
  //           <h3 className="text-lg font-bold w-1/5 text-pink-500 text-center">
  //             {elem.taskNumber.newTask}
  //           </h3>
  //           <h5 className="text-lg font-bold w-1/5 text-yellow-400 text-center">
  //             {elem.taskNumber.active}
  //           </h5>
  //           <h5 className="text-lg font-bold w-1/5 text-emerald-400 text-center">
  //             {elem.taskNumber.completed}
  //           </h5>
  //           <h5 className="text-lg font-bold w-1/5 text-red-500 text-center">
  //             {elem.taskNumber.failed}
  //           </h5>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );

  // ... imports and logic remain same
  return (
    <div className="bg-white/2 border border-white/10 p-6 rounded-3xl mt-5 shadow-2xl">
      <div className="border-b border-white/5 mb-4 py-3 px-6 flex justify-between rounded-xl opacity-60">
        <h2 className="text-xs font-bold w-1/5 text-white uppercase tracking-widest">
          Employee
        </h2>
        <h3 className="text-xs font-bold w-1/5 text-white uppercase tracking-widest text-center">
          New
        </h3>
        <h5 className="text-xs font-bold w-1/5 text-white uppercase tracking-widest text-center">
          Active
        </h5>
        <h5 className="text-xs font-bold w-1/5 text-white uppercase tracking-widest text-center">
          Done
        </h5>
        <h5 className="text-xs font-bold w-1/5 text-white uppercase tracking-widest text-center">
          Failed
        </h5>
      </div>

      <div className="space-y-3 max-h-75 overflow-y-auto pr-2 custom-scrollbar">
        {userData.map((elem, idx) => (
          <div
            key={idx}
            className="bg-white/1 border border-white/5 hover:border-emerald-500/30 hover:bg-white/[0.04] transition-all py-4 px-6 flex justify-between rounded-2xl items-center"
          >
            <h2 className="text-lg font-semibold text-white w-1/5">
              {elem.firstname}
            </h2>
            <h3 className="text-lg font-bold w-1/5 text-pink-500 text-center">
              {elem.taskNumber.newTask}
            </h3>
            <h5 className="text-lg font-bold w-1/5 text-yellow-400 text-center">
              {elem.taskNumber.active}
            </h5>
            <h5 className="text-lg font-bold w-1/5 text-emerald-400 text-center">
              {elem.taskNumber.completed}
            </h5>
            <h5 className="text-lg font-bold w-1/5 text-red-500 text-center">
              {elem.taskNumber.failed}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};;

export default AllTask
