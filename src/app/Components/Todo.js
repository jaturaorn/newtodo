"use client";

import { useState } from "react";
import List from "./List";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editInput, setEditInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: input, done: false }]);
    setInput("");
    setOpenModal(false);
  };

  function editTask(id, newInput) {
    const editedTaskList = todos.map((todo) => {
      // if this todo has the same ID as the edited todo
      if (id === todo.id) {
        // Copy the todo and update its name
        return { ...todo, text: newInput };
      }
      // Return the original todo if it's not the edited todo
      return todo;
    });
    setTodos(editedTaskList);
  }

  const startEditing = (todo) => {
    setEditingId(todo.id);
    setEditInput(todo.text);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditInput("");
  };

  const saveEdit = (id) => {
    if (editInput.trim()) {
      editTask(id, editInput);
      cancelEdit();
    }
  };

  const toggleDone = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  // const handleSearch = (event) => {
  //   setSearchTerm(event.target.value);
  // };

  // const filteredItems = items.filter((item) =>
  //   item.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  return (
    <div className="w-full h-full xl:px-8 md:px-6 px-4 ">
      <div className="mb-4 pt-4 flex justify-center items-center gap-4">
        <h1 className=" text-3xl text-white">Today</h1>
        <h3 className="text-lg text-white">{todos.length}</h3>
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
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter a new task..."
                className="w-full bg-white outline-none rounded-[16px] p-3"
              />
              <div className="flex justify-end gap-3">
                <button
                  className="min-w-[122px] rounded-lg border-[1px] border-blue-700 bg-transparent 
    px-[11px] py-[7px] text-blue-700
    hover:border-blue-500 hover:text-blue-500 active:border-blue-600
    active:text-blue-600"
                >
                  cancel
                </button>
                <button
                  className="min-w-[122px] rounded-lg bg-blue-700 px-[10px] py-[6px] hover:bg-blue-500 focus:outline-none focus:ring-4
    focus:ring-blue-900 active:bg-blue-600"
                  onClick={addTodo}
                >
                  add
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className=" w-full flex flex-col gap-2.5">
        {todos.length === 0 ? (
          <div>
            <h4 className="text-xl text-white">there is no todo like now</h4>
          </div>
        ) : (
          <div className="w-full border border-zinc-500 flex flex-col justify-between p-3 rounded-lg gap-3">
            {todos.map((todo) => (
              <List
                key={todo.id}
                TODO={todo}
                startEditing={startEditing}
                input={input}
                editingId={editingId}
                setEditingId={editingId}
                editInput={editInput}
                setEditInput={setEditInput}
                saveEdit={saveEdit}
                cancelEdit={cancelEdit}
                toggleDone={toggleDone}
                deleteTodo={deleteTodo}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Todo;
