import React, { useState } from 'react';
import { Todo } from '../types';

interface TodoFormProps {
  addTodo: (todo: Omit<Todo, 'id'>) => void;
}

export const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [priority, setPriority] = useState(1);
    const [deadline, setDeadline] = useState('');
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (title && description && category && deadline) {
        addTodo({
          userId: 1, // Replace with actual userId in a real application
          title,
          description,
          category,
          priority,
          deadline,
          completed: false,
        });
        setTitle('');
        setDescription('');
        setCategory('');
        setPriority(1);
        setDeadline('');
      }
    };
  
    return (
      <form onSubmit={handleSubmit} className="p-4 mb-4 bg-white shadow-md rounded">
        <h2 className="text-lg font-bold mb-2">Add Todo</h2>
        <div className="mb-2">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700">Description</label>
          <textarea
            className="w-full px-3 py-2 border rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-2">
          <label className="block text-gray-700">Category</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700">Priority</label>
          <input
            type="number"
            className="w-full px-3 py-2 border rounded"
            value={priority}
            onChange={(e) => setPriority(Number(e.target.value))}
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700">Deadline</label>
          <input
            type="date"
            className="w-full px-3 py-2 border rounded"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Add Todo
        </button>
      </form>
    );
  };
