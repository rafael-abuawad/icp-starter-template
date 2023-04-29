import { useState } from "react";
import { backend } from "../src/declarations/backend";
import reactLogo from "./assets/react.svg";
import icpLogo from "./assets/icp.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// document.querySelector("form").addEventListener("submit", async (e) => {
//   e.preventDefault();
//   const button = e.target.querySelector("button");

//   const name = document.getElementById("name").value.toString();

//   button.setAttribute("disabled", true);

//   // Interact with foo actor, calling the greet method
//   const greeting = await custom_greeting_backend.greet(name);

//   button.removeAttribute("disabled");

//   document.getElementById("greeting").innerText = greeting;

//   return false;
// });

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  async function handleSubmit() {
    const msg = await backend.greet(name);
    console.log(msg);
    setName("");
    setGreeting(msg);
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <br />
        <a href="https://internetcomputer.org/" target="_blank">
          <img src={icpLogo} className="logo" alt="ICP logo" />
        </a>
      </div>
      <h1>Vite + React + The Internet Computer</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <div className="card">
        <div>
          <input
            id="name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          ></input>
          <button onClick={handleSubmit}>Get Greeting!</button>
        </div>
        <div>
          Greeting is: "<span style={{ color: "blue" }}>{greeting}</span>"
        </div>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
