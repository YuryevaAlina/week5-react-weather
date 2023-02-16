import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Wather App</h1>
        <Weather />
        <button className="btn btn-primary">Hello</button>

        <footer>
          This project is created by{" "}
          <a
            href="https://www.markus-steinacher.at/sichere-externe-links-durch-target_blank-relnoopener-noreferrer/"
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
