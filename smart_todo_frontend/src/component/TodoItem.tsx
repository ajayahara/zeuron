import React, { useState } from "react";
import { Todo } from "../types";
import { CheckIcon, Pencil2Icon, TrashIcon } from "@radix-ui/react-icons";

interface TodoItemProps {
  todo: Todo;
  updateTodo: (id: number, updatedTodo: Partial<Todo>) => void;
  deleteTodo: (id: number) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  updateTodo,
  deleteTodo,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [category, setCategory] = useState(todo.category);
  const [priority, setPriority] = useState(todo.priority);
  const [deadline, setDeadline] = useState(todo.deadline);
  const [completed, setCompleted] = useState(todo.completed);

  const handleSave = () => {
    updateTodo(todo.id, { title, description, category, priority, deadline });
    setIsEditing(false);
  };

  return (
    <div className="p-2 bg-white shadow-md rounded">
      {isEditing ? (
        <div>
          <input
            type="text"
            className="w-full px-3 py-2 mb-2 border rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="w-full px-3 py-2 mb-2 border rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <input
            type="text"
            className="w-full px-3 py-2 mb-2 border rounded"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type="number"
            className="w-full px-3 py-2 mb-2 border rounded"
            value={priority}
            onChange={(e) => setPriority(Number(e.target.value))}
          />
          <input
            type="date"
            className="w-full px-3 py-2 mb-2 border rounded"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-green-500 text-white rounded mr-2"
          >
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="px-4 py-2 bg-gray-500 text-white rounded"
          >
            Cancel
          </button>
        </div>
      ) : (
        <div className="text-gray-700">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold line-clamp-1">{todo.title}</h3>
            <div className="flex  gap-2">
              {completed ? (
                <button disabled title="Completed" className="cursor-pointer">✔️</button>
              ) : (
                <>
                  <button onClick={() => setIsEditing(true)}>
                    <Pencil2Icon className="w-4 h-4 text-gray-700" />
                  </button>
                  <button onClick={() => deleteTodo(todo.id)}>
                    <TrashIcon className="w-4 h-4 text-red-700" />
                  </button>
                </>
              )}
            </div>
          </div>
          <p className=" line-clamp-2">{todo.description}</p>
          <div className="flex gap-2">
            <button title="Category" className="hover:underline">
              #{todo.category}
            </button>
            <button title="Priority" className="hover:underline">
              {todo.priority}
            </button>
            <button title="Deadline" className="hover:underline">
              {todo.deadline}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
