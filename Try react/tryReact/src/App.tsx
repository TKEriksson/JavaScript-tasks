import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './components/Hello'
import Form from './components/Form'


function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [MyNameGlobal,setMyNameGlobal] = useState("");

  function resetCounts() {
    setCount(0);
    setCount2(0);
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Hello onClick={() => setCount2((count2) => count2 + count)} count={count2} onClick2={resetCounts}>Hello {MyNameGlobal}!</Hello>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Form setMyNameGlobal={setMyNameGlobal}></Form>
      <p className="read-the-docs">
        Name: {MyNameGlobal}
      </p>
    </>
  )
}

export default App
