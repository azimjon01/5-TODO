import styled from "@emotion/styled";
import { TodoList } from "./features/todo/TodoList";
import { Global } from "@emotion/react";
import GlobalStyles from "./styles/global";

const Wrapper = styled.div({
  position: "relative",
  width: "40vw",
  height: "80vh",
  margin: "40px auto",
  padding: 24,
  border: "1px solid #ccc",
  borderRadius: 8,
  backgroundColor: "#f9f9f9",
  overflowY: "hidden",
});

const Icon = styled.p({
  position: "absolute",
  right: 5,
  top: 5,
});

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Wrapper>
        <TodoList />
        <Icon>🌘🌕</Icon>
      </Wrapper>
    </>
  );
}

export default App;
