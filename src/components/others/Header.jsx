// import React from 'react'

// const Header = (props) => {

//   const logOutUser = () => {

//     localStorage.setItem('loggedInUser', '')
//     props.changeUser('')
//     // window.location.reload()
//   }

//   // return (
//   //   <div className="flex items-end justify-between">
//   //     <h1 className="text-2xl font-medium">
//   //       {" "}
//   //       Hello <br />{" "}
//   //       <span className="text-3xl font-semibold">
//   //         username <span className="text-2xl">🐢</span>{" "}
//   //       </span>{" "}
//   //     </h1>
//   //     <button onClick={logOutUser} className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm">
//   //       Log Out
//   //     </button>
//   //   </div>
//   // );

//   return (
//     <div className="flex items-end justify-between p-2">
//       <h1 className="text-2xl font-medium text-white">
//         Hello <br />
//         <span className="text-3xl font-semibold">
//           username <span className="text-2xl">👋</span>
//         </span>
//       </h1>
//       <button
//         onClick={logOutUser}
//         className="bg-red-500/10 hover:bg-red-500 border border-red-500/50 text-red-500 hover:text-white transition-all duration-300 text-base font-medium px-6 py-2 rounded-xl"
//       >
//         Log Out
//       </button>
//     </div>
//   );
// }

// export default Header

import React from "react";

const Header = (props) => {
  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
  };

  return (
    <div className="flex items-end justify-between p-2">
      <h1 className="text-2xl font-medium text-white">
        Hello <br />
        <span className="text-3xl font-semibold">
          {/* Display the passed name or 'Admin' as a fallback */}
          {props.data ? props.data : "Admin"}{" "}
          <span className="text-2xl">👋</span>
        </span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-500/10 hover:bg-red-500 border border-red-500/50 text-red-500 hover:text-white transition-all duration-300 text-base font-medium px-6 py-2 rounded-xl"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
