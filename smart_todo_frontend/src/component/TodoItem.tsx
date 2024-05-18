import React, { useState } from "react";
import { Todo } from "../types";

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

  const handleSave = () => {
    updateTodo(todo.id, { title, description, category, priority, deadline });
    setIsEditing(false);
  };

  return (
    <div className="p-4 mb-2 bg-white shadow-md rounded">
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
        <div>
          <h3 className="text-lg font-bold">{todo.title}</h3>
          <p className="text-gray-700">{todo.description}</p>
          <p className="text-gray-700">Category: {todo.category}</p>
          <p className="text-gray-700">Priority: {todo.priority}</p>
          <p className="text-gray-700">Deadline: {todo.deadline}</p>
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 bg-yellow-500 text-white rounded mr-2"
          >
            Edit
          </button>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};
