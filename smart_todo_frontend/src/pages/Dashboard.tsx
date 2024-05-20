import React, { useContext, useEffect, useState } from "react";
import { TodoForm } from "../component/TodoForm";
import { TodoList } from "../component/TodoList";
import { Todo } from "../types";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { NotificationList } from "../component/NotificationList";

export const Dashboard: React.FC = () => {
  const { logout, token } = useContext(AuthContext);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPriority, setSelectedPriority] = useState<number | null>(null);

  useEffect(() => {
    fetchTasks();
  }, [currentPage, selectedPriority]);

  const fetchTasks = async () => {
    try {
      if (!token) return;
      const url = new URL("http://localhost:8000/api/tasks");
      const params: any = { page: currentPage };
      if (selectedPriority) {
        params.priority = selectedPriority;
      }
      url.search = new URLSearchParams(params).toString();

      const res = await fetch(url.toString(), {
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
      });
      const data = await res.json();
      setTodos(data);
    } catch (error) {
      console.error("Fetch tasks error:", error);
    }
  };

  const addTodo = async (todo: Omit<Todo, "id" | "userId">) => {
    try {
      if (!token) return;
      await fetch("http://localhost:8000/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
        body: JSON.stringify(todo),
      });
      fetchTasks();
    } catch (error) {
      console.error("Add task error:", error);
    }
  };

  const updateTodo = async (id: number, updatedTodo: Partial<Todo>) => {
    try {
      if (!token) return;
      await fetch(`http://localhost:8000/api/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
        body: JSON.stringify(updatedTodo),
      });
      fetchTasks();
    } catch (error) {
      console.error("Update task error:", error);
    }
  };

  const deleteTodo = async (id: number) => {
    try {
      if (!token) return;
      await fetch(`http://localhost:8000/api/tasks/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
      });
      fetchTasks();
    } catch (error) {
      console.error("Delete task error:", error);
    }
  };

  const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const priority = parseInt(e.target.value);
    setSelectedPriority(priority);
  };

  return (
    <div className="w-full h-[100vh] bg-gradient-to-bl from-violet-600 via-purple-600 to-violet-500">
      <div className="h-[10vh] flex flex-col justify-center items-center py-2">
        <div className="w-full flex justify-between py-2 px-4">
          <div className="text-xl font-semibold">Smart Todo App</div>
          <div className="flex gap-4 justify-center items-center">
            <Link to="/">Analytics</Link>
            <button
              className="flex justify-center items-center"
              onClick={() => logout()}
            >
              LogOut &rarr;
            </button>
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
          <div className="w-full flex items-center justify-between mb-2 px-2">
            <h2 className="mb-2 text-lg font-semibold">TodoList :</h2>
            <div className="flex items-center gap-6">
              <select
                name="filter"
                title="Priority"
                className="rounded-md px-2 border border-white bg-transparent text-black w-full focus:outline-none"
                value={selectedPriority || ""}
                onChange={handlePriorityChange}
              >
                <option value="">All</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <div className="flex items-center gap-2">
                <button
                  className="rounded-md px-2 border border-white bg-transparent w-full focus:outline-none"
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  {"<"}
                </button>
                <button className="rounded-md px-2 border border-white bg-transparent w-full focus:outline-none">
                  {currentPage}
                </button>
                <button
                  className="rounded-md px-2 border border-white bg-transparent w-full focus:outline-none"
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  {">"}
                </button>
              </div>
            </div>
          </div>
          <TodoList
            todos={todos}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        </div>
        <div className="col-span-1">
          <h2 className="mb-2 text-lg font-semibold">Notification :</h2>
          <NotificationList />
        </div>
      </div>
    </div>
  );
};
