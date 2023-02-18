import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Hamburg" />

        <footer>
          This project is created by{" "}
          <a
            href="https://main--grand-pithivier-c391ed.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alina Yuryeva{" "}
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/YuryevaAlina/week5-react-weather"
            target="_blank"
            rel="nnoopener noreferrer"
          >
            open-sourced at GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
