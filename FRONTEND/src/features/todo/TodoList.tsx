import { useEffect, useState } from "react";
import { getTodos, addTodo, deleteTodo, updateTodo } from "../../api/todoApi";
import { TodoItem } from "../../components/TodoItem";
import { AddTodo } from "./AddTodo";
import styled from "@emotion/styled";

const Container = styled.div({
  height: "calc(100% - 2px)",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 10,
  background: "red",
  overflowY: "auto",
  boxSizing: "border-box",
});

const Title = styled.h1({
  width: "100%",
  display: "grid",
  placeItems: "center",
});

export const TodoList = () => {
  const [todos, setTodos] = useState<
    { id: number; text: string; completed: boolean }[]
  >([]);

  const fetchTodos = async () => {
    const res = await getTodos();
    setTodos(res.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleAdd = async (text: string) => {
    const res = await addTodo(text);
    setTodos([...todos, res.data]);
  };

  const handleDelete = async (id: number) => {
    await deleteTodo(id);
    setTodos(todos.filter((t) => t.id !== id));
  };

  const handleToggle = async (id: number) => {
    const todo = todos.find((t) => t.id === id);
    if (todo) {
      const res = await updateTodo(id, { completed: !todo.completed });
      setTodos(todos.map((t) => (t.id === id ? res.data : t)));
    }
  };

  return (
    <Container>
      <Title>📋 Vazifalar ro‘yxati</Title>
      <AddTodo onAdd={handleAdd} />
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={() => handleDelete(todo.id)}
          onToggle={() => handleToggle(todo.id)}
        />
      ))}
    </Container>
  );
};
