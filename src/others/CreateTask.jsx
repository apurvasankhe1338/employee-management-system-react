import React from 'react'
import { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const [newTask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("task created!");

    setNewTask({
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    });
    const data = userData;

    data.forEach(function (elem) {
      if (assignTo == elem.firstname) {
        elem.tasks.push(newTask);
        elem.taskNumber.newTask = elem.taskNumber.newTask + 1;
      }
    });
    setUserData(data);
    console.log(data);

    setTaskTitle("");
    setCategory("");
    setAssignTo("");
    setTaskDate("");
    setTaskDescription("");
  };

  // return (
  //   <div>
  //     <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
  //       <form
  //         onSubmit={(e) => {
  //           submitHandler(e);
  //         }}
  //         className="flex flex-wrap w-full items-start justify-between"
  //       >
  //         <div className="w-1/2">
  //           <div>
  //             <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
  //             <input
  //               value={taskTitle}
  //               onChange={(e) => {
  //                 setTaskTitle(e.target.value);
  //               }}
  //               className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4 "
  //               type="text"
  //               placeholder="Make a ui design"
  //             />
  //           </div>
  //           <div>
  //             <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
  //             <input
  //               value={taskDate}
  //               onChange={(e) => {
  //                 setTaskDate(e.target.value);
  //               }}
  //               className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4 "
  //               type="date"
  //             />
  //           </div>

  //           <div>
  //             <h3 className="text-sm text-gray-300 mb-0.5">Asign to</h3>
  //             <input
  //               value={assignTo}
  //               onChange={(e) => {
  //                 setAssignTo(e.target.value);
  //               }}
  //               className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4 "
  //               type="text"
  //               placeholder="employee name"
  //             />
  //           </div>

  //           <div>
  //             <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
  //             <input
  //               value={category}
  //               onChange={(e) => {
  //                 setCategory(e.target.value);
  //               }}
  //               className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4 "
  //               type="text"
  //               placeholder="design, dec, etc?"
  //             />
  //           </div>
  //         </div>

  //         <div className="w-2/5 flex flex-col items-start">
  //           <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
  //           <textarea
  //             value={taskDescription}
  //             onChange={(e) => {
  //               setTaskDescription(e.target.value);
  //             }}
  //             className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400"
  //             name=""
  //             id=""
  //             cols="30"
  //             rows="10"
  //           ></textarea>
  //           <button className="bg-rose-700 hover:bg-emerald-900 px-5 p-2 rounded text-sm mt-4 w-full ">
  //             Create Task
  //           </button>
  //         </div>
  //       </form>
  //     </div>
  //   </div>
  // );

  // ... imports and logic remain same
  return (
    <div className="p-10 bg-white/[0.02] border border-white/10 backdrop-blur-xl mt-7 rounded-3xl shadow-2xl">
      <form
        onSubmit={submitHandler}
        className="flex flex-wrap w-full items-start justify-between"
      >
        <div className="w-1/2 space-y-5">
          <div>
            <h3 className="text-sm text-zinc-400 mb-1 ml-1 font-medium">
              Task Title
            </h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="text-sm py-3 px-4 w-4/5 rounded-xl outline-none bg-zinc-900/50 border border-white/10 focus:border-emerald-500 transition-all text-white placeholder:text-zinc-700"
              type="text"
              placeholder="Make a ui design"
            />
          </div>
          <div>
            <h3 className="text-sm text-zinc-400 mb-1 ml-1 font-medium">
              Date
            </h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="text-sm py-3 px-4 w-4/5 rounded-xl outline-none bg-zinc-900/50 border border-white/10 focus:border-emerald-500 transition-all text-white"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-sm text-zinc-400 mb-1 ml-1 font-medium">
              Asign to
            </h3>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="text-sm py-3 px-4 w-4/5 rounded-xl outline-none bg-zinc-900/50 border border-white/10 focus:border-emerald-500 transition-all text-white placeholder:text-zinc-700"
              type="text"
              placeholder="employee name"
            />
          </div>
          <div>
            <h3 className="text-sm text-zinc-400 mb-1 ml-1 font-medium">
              Category
            </h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm py-3 px-4 w-4/5 rounded-xl outline-none bg-zinc-900/50 border border-white/10 focus:border-emerald-500 transition-all text-white placeholder:text-zinc-700"
              type="text"
              placeholder="design, dev, etc"
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-zinc-400 mb-1 ml-1 font-medium">
            Description
          </h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full h-56 text-sm py-3 px-4 rounded-xl outline-none bg-zinc-900/50 border border-white/10 focus:border-emerald-500 transition-all text-white resize-none"
          ></textarea>
          <button className="bg-emerald-600 hover:bg-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] active:scale-95 transition-all py-4 rounded-xl text-base font-bold mt-5 w-full text-white">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask
