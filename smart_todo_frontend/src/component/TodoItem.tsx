import React, { useState } from "react";
import { Todo } from "../types";
import { Cross1Icon, FilePlusIcon, Pencil2Icon, TrashIcon } from "@radix-ui/react-icons";

interface TodoItemProps {
  todo: Todo;
  updateTodo: (id: number, updatedTodo: Partial<Todo>) => void;
  deleteTodo: (id: number) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, updateTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [category, setCategory] = useState(todo.category);
  const [priority, setPriority] = useState(todo.priority);
  const [deadline, setDeadline] = useState(todo.deadline);
  const [completed, setCompleted] = useState(todo.completed);

  const handleSave = () => {
    updateTodo(todo.id, { title, description, category, priority, deadline ,completed});
    setIsEditing(false);
  };

  const toggleComplete = async () => {
    updateTodo(todo.id, { completed: !completed });
    setCompleted(!completed);
  };

  return (
    <div className="p-2 bg-white shadow-md rounded">
      {isEditing ? (
        <div className="flex flex-col gap-1 text-sm">
          <div className="flex justify-between items-center text-gray-600 ">
            <h2 className="text-lg font-bold line-clamp-1">{title}</h2>
            <div className="flex justify-between items-center gap-2">
              <button onClick={handleSave}>
                <FilePlusIcon className="w-4 h-4 text-green-700" />
              </button>
              <button onClick={() => setIsEditing(false)}>
                <Cross1Icon className="w-4 h-4 text-red-700" />
              </button>
            </div>
          </div>
          <textarea
            className="rounded-md px-2 py-1 bg-white w-full text-gray-600 border border-1 border-gray-700 focus:outline-none"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <input
            type="text"
            className="rounded-md px-2 py-1 bg-white w-full text-gray-600 border border-1 border-gray-700 focus:outline-none"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type="number"
            className="rounded-md px-2 py-1 bg-white w-full text-gray-600 border border-1 border-gray-700 focus:outline-none"
            value={priority}
            onChange={(e) => setPriority(Number(e.target.value))}
          />
          <input
            type="date"
            className="rounded-md px-2 py-1 bg-white w-full text-gray-600 border border-1 border-gray-700 focus:outline-none"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
          <div className="flex gap-2 flex-row-reverse px-2 justify-end">
            <label htmlFor="isCompleted" className="text-gray-600">
              isCompleted
            </label>
            <input
              type="checkbox"
              checked={completed}
              onChange={toggleComplete}
            />
          </div>
        </div>
      ) : (
        <div className="text-gray-700">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold line-clamp-1">{todo.title}</h3>
            <div className="flex gap-2">
              {completed ? (
                <button disabled title="Completed" className="cursor-pointer">
                  ✔️
                </button>
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
          <p className="text-sm line-clamp-2">{todo.description}</p>
          <div className="flex gap-2 text-xs">
            <button title="Category" className="hover:underline text-blue-700">
              #{todo.category}
            </button>
            <button title="Priority" className="hover:underline text-orange-700">
              ⚡{todo.priority}
            </button>
            <button title="Deadline" className="hover:underline text-teal-700">
              📆{todo.deadline}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
