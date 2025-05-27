const List = ({
  TODO,
  startEditing,
  editingId,
  editInput,
  setEditInput,
  cancelEdit,
  saveEdit,
  toggleDone,
  deleteTodo,
}) => {
  const isEditing = editingId === TODO.id;

  return (
    <div className="flex w-full justify-between">
      {isEditing ? (
        <input
          type="text"
          value={editInput}
          onChange={(e) => setEditInput(e.target.value)}
          className="bg-zinc-800 text-white rounded px-2 py-1 w-full mr-4 outline-none"
        />
      ) : (
        <h5 className={`text-white ${TODO.done ? "line-through" : ""}`}>
          {TODO.text}
        </h5>
      )}
      <div className="flex gap-2">
        {isEditing ? (
          <>
            <button
              onClick={() => saveEdit(TODO.id)}
              className="text-sm text-green-500 hover:underline px-[10px] py-[6px] rounded-lg"
            >
              Save
            </button>
            <button
              onClick={cancelEdit}
              className="text-sm text-red-500 hover:underline px-[10px] py-[6px] rounded-lg"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => startEditing(TODO)}
              className="text-sm text-blue-500 hover:underline px-[10px] py-[6px] rounded-lg border-[1px] border-blue-700"
            >
              Edit
            </button>
            <button
              onClick={() => toggleDone(TODO.id)}
              className={`text-sm ${
                TODO.done
                  ? "text-yellow-500"
                  : "text-green-500 px-[10px] py-[6px]"
              } hover:underline rounded-lg border-[1px] border-green-700 text-sm`}
            >
              {TODO.done ? "Undo" : "✓"}
            </button>
            <button
              onClick={() => deleteTodo(TODO.id)}
              className="text-sm text-red-500 hover:underline px-[10px] py-[6px] rounded-lg border-[1px] border-red-700"
            >
              🗑️
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default List;
