import React, { useState } from "react";
import { TodoForm } from "../component/TodoForm";
import { TodoList } from "../component/TodoList";
import { Todo } from "../types";
import { Link } from "react-router-dom";

const initialTodos: Todo[] = [
  {
    id: 1,
    userId: 1,
    title: "Complete Electron App",
    description:
      "Finish the development of the Electron to-do list application",
    category: "Development",
    priority: 1,
    deadline: "2024-06-01",
    completed: true,
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
    <div className="w-full h-[100vh] bg-gradient-to-bl from-violet-600 via-purple-600 to-violet-500">
      <div className="h-[10vh] flex flex-col justify-center items-center py-2">
        <div className="w-full flex justify-between py-2 px-4">
          <div className="text-xl font-semibold">Smart Todo App</div>
          <div className="flex gap-4">
            <Link to="/user/dashboard">Analytics</Link>
            <Link to="/">LogOut &rarr;</Link>
          </div>
        </div>
        <hr className="w-full my-1" />
      </div>
      <div className="w-full h-[90vh] overflow-y-scroll grid grid-cols-6 gap-4 example px-4 py-2">
        <div className="col-span-2">
          <h2 className="mb-2 text-lg font-semibold">TodoForm :</h2>
          <TodoForm addTodo={addTodo} />
        </div>
        <div className="col-span-3 border-l border-r border-1 border-white min-h-full">
          <h2 className="mb-2 px-2 text-lg font-semibold">TodoList :</h2>
          <TodoList
            todos={todos}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        </div>
        <div className="col-span-1">
          <h2 className="mb-2 text-lg font-semibold">Notification :</h2>
        </div>
      </div>
    </div>
  );
};
