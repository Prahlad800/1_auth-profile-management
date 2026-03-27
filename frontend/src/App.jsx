import {Navigate, Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './page/Home'
import Login from './page/Login'
import Signup from './page/Signup'



function App() {
 

  return (
    <Routes>
      <Route path="/"element={<Navigate to="/login"/>}/>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  )
}

export default App
