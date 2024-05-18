import React from "react";
import { Todo } from "../types";
import { TodoItem } from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  updateTodo: (id: number, updatedTodo: Partial<Todo>) => void;
  deleteTodo: (id: number) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  updateTodo,
  deleteTodo,
}) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};
