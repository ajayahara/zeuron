import React, { useState } from "react";
import { Todo } from "../types";

interface TodoFormProps {
  addTodo: (todo: Omit<Todo, "id">) => void;
}

export const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState(1);
  const [deadline, setDeadline] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && description && category && deadline) {
      addTodo({
        userId: 1,
        title,
        description,
        category,
        priority,
        deadline,
        completed: false,
      });
      setTitle("");
      setDescription("");
      setCategory("");
      setPriority(1);
      setDeadline("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="py-2 px-4 text-white shadow-md rounded"
    >
      <h2 className="font-semibold mb-2">Add Todo :</h2>
      <div className="grid grid-cols-2 gap-2">
        <div className="col-span-2">
          <label className="block mb-1">Title</label>
          <input
            type="text"
            className="rounded-md px-2 py-2 bg-white w-full text-gray-600 focus:outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="row-start-2 col-start-2 row-end-4">
          <label className="block mb-1">Description</label>
          <textarea
            className="rounded-md px-2 py-2 bg-white w-full text-gray-600 focus:outline-none h-[85%]"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label className="block mb-1">Category</label>
          <input
            type="text"
            className="rounded-md px-2 py-2 bg-white w-full text-gray-600 focus:outline-none"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-1">Priority</label>
          <input
            type="number"
            className="rounded-md px-2 py-2 bg-white w-full text-gray-600 focus:outline-none"
            value={priority}
            onChange={(e) => setPriority(Number(e.target.value))}
          />
        </div>
        <div className="col-start-1 col-end-3 row-start-4 row-end-5">
          <label className="block mb-1">Deadline</label>
          <input
            type="date"
            className="rounded-md px-2 py-2 bg-white w-full text-gray-600 focus:outline-none"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="col-span-2 my-2 px-4 py-2 bg-gradient-to-b from-violet-700 via-violet-600 to-violet-700 hover:brightness-105 font-medium text-white rounded"
        >
          Add Todo
        </button>
      </div>
    </form>
  );
};
