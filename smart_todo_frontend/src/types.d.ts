export interface Todo {
  id: number;
  userId: number;
  title: string;
  description: string;
  category: string;
  priority: number;
  deadline: string;
  completed: boolean;
}
