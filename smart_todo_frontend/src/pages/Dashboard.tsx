import React, { useState } from "react";
import { TodoForm } from "../component/TodoForm";
import { TodoList } from "../component/TodoList";
import { Todo } from "../types";

const initialTodos: Todo[] = [
    {
      id: 1,
      userId: 1,
      title: "Complete Electron App",
      description: "Finish the development of the Electron to-do list application",
      category: "Development",
      priority: 1,
      deadline: "2024-06-01",
      completed: false,
    },
    {
      id: 2,
      userId: 1,
      title: "Write Documentation",
      description: "Prepare the documentation for the new features",
      category: "Writing",
      priority: 2,
      deadline: "2024-06-05",
      completed: false,
    },
    {
      id: 3,
      userId: 1,
      title: "Team Meeting",
      description: "Discuss project milestones and next steps",
      category: "Meetings",
      priority: 3,
      deadline: "2024-06-03",
      completed: false,
    },
    {
      id: 4,
      userId: 1,
      title: "Code Review",
      description: "Review code submitted by the team",
      category: "Development",
      priority: 2,
      deadline: "2024-06-02",
      completed: false,
    },
    {
      id: 5,
      userId: 1,
      title: "Fix Bugs",
      description: "Resolve bugs reported by users",
      category: "Development",
      priority: 1,
      deadline: "2024-06-04",
      completed: false,
    },
  ];

export const Dashboard: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const addTodo = (todo: Omit<Todo, "id">) => {
    setTodos([...todos, { id: todos.length + 1, ...todo }]);
  };

  const updateTodo = (id: number, updatedTodo: Partial<Todo>) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, ...updatedTodo } : todo))
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Smart To-Do List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
};
