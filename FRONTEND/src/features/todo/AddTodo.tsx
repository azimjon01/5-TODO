import styled from "@emotion/styled";
import { useState } from "react";

const Form = styled.form({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 20,
});

const Input = styled.input({
  flex: 1,
  padding: 8,
  fontSize: 16,
});

const Button = styled.button({
  padding: "10px 20px",
  background: "#3498db",
  color: "#fff",
  border: "none",
  fontSize: 16,
  marginLeft: 8,
  cursor: "pointer",
  borderRadius: "4px",
});

interface Props {
  onAdd: (text: string) => void;
}

export const AddTodo = ({ onAdd }: Props) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        autoFocus
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Yangi vazifa yozing..."
      />
      <Button type="submit">Qo‘shish</Button>
    </Form>
  );
};
