import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";

// const AdminDashboard = (props) => {
//   return (
//     <div className="h-screen w-full p-7 bg-[#050505] bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] from-emerald-900/10 via-black to-black overflow-y-auto">
//       <Header changeUser={props.changeUser} />
//       <CreateTask />
//       <AllTask />
//     </div>
//   );
// };

const AdminDashboard = (props) => {
  return (
    <div className="h-screen w-full p-7 bg-[#050505] bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] from-emerald-900/10 via-black to-black overflow-y-auto">
      {/* Passing 'Admin' manually to the header */}
      <Header changeUser={props.changeUser} data="Admin" />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
