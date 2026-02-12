import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import ListPage from './components/ListPage';
import ListCard from './components/ListCard';
import Fact from './components/Fact';


function App() {
  const [count, setCount] = useState(0)

  const myitems = [
    {"name": "Samson Johnson", "position": "Center"},
    {"name": "Alex Karaban", "position": "Forward"},
    {"name": "Liam McNeeley", "position": "Forward"},
    {"name": "Solo Ball", "position": "Shooting Guard"},
    {"name": "Hassan Diarra", "position": "Point Guard"}];

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
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Button variant="success">
        test
      </Button>
      <div className="container">
        <ListPage length="6"/>
      </div>
      <ListCard items = {myitems} />
      <Fact></Fact>
    </>
  )
}

export default App
