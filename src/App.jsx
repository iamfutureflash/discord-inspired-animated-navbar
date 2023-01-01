import { useState } from 'react';
import SideBar from './SideBar';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App ">
      <SideBar/>
    </div>
  )
}

export default App
