import styled from "@emotion/styled";
import { FC } from "react";

const Item = styled.div({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  padding: "8px 12px",
  borderBottom: "1px solid #ddd",
  alignItems: "center",
});

const Text = styled.span<{ completed: boolean }>(({ completed }) => ({
  textDecoration: completed ? "line-through" : "none",
  color: completed ? "#888" : "#000",
  cursor: "pointer",
}));

const Button = styled.button({
  background: "#e74c3c",
  color: "#fff",
  border: "none",
  padding: "4px 8px",
  cursor: "pointer",
  borderRadius: "4px",
});

interface Props {
  todo: { id: number; text: string; completed: boolean };
  onDelete: () => void;
  onToggle: () => void;
}

export const TodoItem: FC<Props> = ({ todo, onDelete, onToggle }) => (
  <Item>
    <Text completed={todo.completed} onClick={onToggle}>
      {todo.text}
    </Text>
    <Button onClick={onDelete}>O'chirish</Button>
  </Item>
);
