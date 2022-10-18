// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
import Mypost from './Pages/Mypost'
import Createpost from './Pages/Createpost'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/createpost' element={<Createpost/>}/>
        <Route path='/mypost' element={<Mypost/>}/>
      </Routes>
    </div>
  )
}

export default App
