import React, { useState } from "react";
import { Todo } from "../types";

type newTodo=Omit<Todo, "id" | "userId">;

interface TodoFormProps {
  addTodo: (todo:newTodo ) => void;
}

const initialState:newTodo={
  title: "",
  description: "",
  category: "",
  priority: 1,
  deadline: "",
  completed:false
}

export const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [formState, setFormState] = useState<newTodo>(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: name === "priority" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { title, description, category, deadline } = formState;
    if (title && description && category && deadline) {
      addTodo({...formState});
      setFormState({...initialState});
    }
  };

  return (
    <form onSubmit={handleSubmit} className="py-2 px-4 text-white rounded">
      <h2 className="font-semibold mb-2">Add Todo :</h2>
      <div className="grid grid-cols-2 gap-2">
        <div className="col-span-2">
          <label className="block mb-1">Title</label>
          <input
            type="text"
            name="title"
            className="rounded-md px-2 py-2 bg-white w-full text-gray-600 focus:outline-none"
            value={formState.title}
            onChange={handleChange}
          />
        </div>
        <div className="row-start-2 col-start-2 row-end-4">
          <label className="block mb-1">Description</label>
          <textarea
            name="description"
            className="rounded-md px-2 py-2 bg-white w-full text-gray-600 focus:outline-none h-[85%]"
            value={formState.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <label className="block mb-1">Category</label>
          <input
            type="text"
            name="category"
            className="rounded-md px-2 py-2 bg-white w-full text-gray-600 focus:outline-none"
            value={formState.category}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block mb-1">Priority</label>
          <select
            name="priority"
            className="rounded-md px-2 py-2 bg-white w-full text-gray-600 focus:outline-none"
            value={formState.priority}
            onChange={handleChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="col-start-1 col-end-3 row-start-4 row-end-5">
          <label className="block mb-1">Deadline</label>
          <input
            type="date"
            name="deadline"
            className="rounded-md px-2 py-2 bg-white w-full text-gray-600 focus:outline-none"
            value={formState.deadline}
            onChange={handleChange}
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
