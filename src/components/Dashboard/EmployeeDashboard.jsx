// import React from 'react'
// import Header from '../others/Header'
// import TaskListNumber from '../others/TaskListNumber'
// import TaskList from '../Tasklist/TaskList'

// const EmployeeDashboard = (props) => {
//   return (
//     <div className="p-10 bg-[#1C1C1C] h-screen ">
//       <Header changeUser={props.changeUser} data={props.data} />
//       <TaskListNumber data={props.data} />
//       <TaskList data={props.data} />
//     </div>
//   );
// }

// export default EmployeeDashboard

import React from "react";
import Header from "../others/Header";
import TaskListNumber from "../others/TaskListNumber";
import TaskList from "../Tasklist/TaskList";

// const EmployeeDashboard = (props) => {
//   return (
//     <div className="p-10 bg-[#050505] bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/10 via-black to-black h-screen overflow-y-auto">
//       <Header changeUser={props.changeUser} data={props.data} />
//       <TaskListNumber data={props.data} />
//       <TaskList data={props.data} />
//     </div>
//   );
// };

const EmployeeDashboard = (props) => {
  return (
    <div className="p-10 bg-[#050505] bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/10 via-black to-black h-screen overflow-y-auto">
      {/* Passing the employee's first name to the header */}
      <Header changeUser={props.changeUser} data={props.data.firstname} />
      <TaskListNumber data={props.data} />
      <TaskList data={props.data} />
    </div>
  );
};

export default EmployeeDashboard;
