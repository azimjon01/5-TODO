import axios from "axios";

const API_URL = "http://localhost:3000/api/todos";

export const getTodos = () => axios.get(API_URL);
export const addTodo = (text: string) => axios.post(API_URL, { text });
export const deleteTodo = (id: number) => axios.delete(`${API_URL}/${id}`);
export const updateTodo = (
  id: number,
  data: Partial<{ completed: boolean; text: string }>,
) => axios.put(`${API_URL}/${id}`, data);
