"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [mainTask, setmainTask] = useState([]);
  const submithandler = (e) => {
    e.preventDefault();
    setdescription("");
    settitle("");
    setmainTask([...mainTask, { title, description }]);
    console.log(mainTask);
  };
  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setmainTask(copyTask);
  };
  let rendertask = <h1>No task Available </h1>;
  if (mainTask.length > 0) {
    rendertask = mainTask.map((t, i) => {
      return (
        <>
          <li key={i}>
            <div className="flex items-center justify-between width-2/3">
              <h4 className="text-2xl bold">{t.title}</h4>
              <h5>{t.description}</h5>
              <button
                onClick={() => {
                  deleteHandler(i);
                }}
                className="rounded text-2xl m-y-2 p-2 bg-red-400 hover:bg-red-700 hover:translate-z-4 duration-200 text-white"
              >
                Delete
              </button>
            </div>
            <hr />
            <hr />
          </li>
        </>
      );
    });
  }

  return (
    <>
      <h1 className="bg-black text-white p-5 flex justify-center text-6xl hover:bg-white hover:text-black transition-colors duration-3000 font-bold w-full">
        Mehtab's To Do List
      </h1>
      <form onSubmit={submithandler}>
        <input
          type="text"
          className="border-4 border-solid border-black m-5 p-y-3 px-4 py-2"
          placeholder="Enter your task"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        ></input>
        <input
          type="text"
          className="border-4 border-solid border-black m-5 p-y-3 px-4 py-2"
          placeholder="Enter Description"
          value={description}
          onChange={(f) => {
            setdescription(f.target.value);
          }}
        ></input>
        <button className="border-2 border-solid border-black hover:bg-black hover:text-white transition-colors duration-4000 text-xl px-4 py-2">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-7 bg-slate-200">
        <ul>{rendertask}</ul>
      </div>
    </>
  );
};

export default page;
