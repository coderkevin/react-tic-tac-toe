import styled from "@emotion/styled/macro";
import logo from "./logo.svg";
import "./App.css";

const PinkParagraph = styled.p`
  color: hotpink;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PinkParagraph>
          Edit <code>src/App.tsx</code> and save to reload.
        </PinkParagraph>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
