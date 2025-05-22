"use client";

import { useState } from "react";
import List from "./List";

const Todo = () => {
  const todos = [];

  const [task, setTask] = useState("");
  const [openModal, setOpenModal] = useState(false);

  function addText() {
    if (task !== null) {
      const newTask = {
        id: Date.now(),
        text: task,
        completed: false,
      };

      todos.push(newTask);
    }
  }
  console.log(todos);

  return (
    <div className="w-full h-full">
      <div className="my-4 flex justify-center items-center gap-4">
        <h1 className=" text-3xl text-white">Today</h1>
        <h3 className="text-base text-white">1</h3>
      </div>
      <div className="my-2">
        <button
          className=" border border-zinc-500 text-white/60 text-sm rounded-lg p-3 cursor-pointer"
          onClick={() => setOpenModal(true)}
        >
          + add new to do
        </button>
      </div>
      {openModal && (
        <div className=" fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className=" max-w-[598px] w-[100%] bg-[#141a28] rounded-4xl border-2 border-[#2b3040] p-6">
            <div className="flex flex-col gap-4">
              <input
                type="text"
                id="task-input"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter a new task..."
                className="w-full bg-white outline-none rounded-[16px] p-3"
              />
              <div className="flex justify-end gap-3">
                <button
                  className="rounded-lg border-[1px] border-blue-700 bg-transparent 
    px-[11px] py-[7px] text-blue-700
    hover:border-blue-500 hover:text-blue-500 active:border-blue-600
    active:text-blue-600"
                >
                  cancel
                </button>
                <button
                  className="min-w-[122px] rounded-lg bg-blue-700 px-[10px] py-[6px] hover:bg-blue-500 focus:outline-none focus:ring-4
    focus:ring-blue-900 active:bg-blue-600"
                  onClick={addText()}
                >
                  add
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div></div>
    </div>
  );
};

export default Todo;
