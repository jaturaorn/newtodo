const List = ({TODO, startEditing, editingId, editInput, setEditInput, cancelEdit, saveEdit}) => {
  const isEditing = editingId === TODO.id;
  
  return <>
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
              className="text-sm text-green-500 hover:underline"
            >
              Save
            </button>
            <button
              onClick={cancelEdit}
              className="text-sm text-red-500 hover:underline"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => startEditing(TODO)}
              className="text-sm text-blue-500 hover:underline"
            >
              Edit
            </button>
            <button
              onClick={() => toggleDone(TODO.id)}
              className="text-sm text-green-500 hover:underline"
            >
              ✓
            </button>
            <button
              onClick={() => deleteTodo(TODO.id)}
              className="text-sm text-red-500 hover:underline"
            >
              🗑️
            </button>
          </>
        )}
      </div>
  </>;
};

export default List;
