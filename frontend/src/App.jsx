import {Navigate, Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './page/Home'
import Login from './page/Login'
import Signup from './page/Signup'
import { useState } from 'react'
import RefreshHandler from './utils/RefreshHandler'



function App() {
  const [isAuth,setIsAuth]=useState(false)

 const PriveteRoute =({element})=>{
  return isAuth ? element : <Navigate to="/login"/>
 }


  return (
    <div>
      <RefreshHandler setIsAuth={setIsAuth}/>
    <Routes>
      <Route path="/"element={<Navigate to="/login"/>}/>
      <Route path="/home" element={<PriveteRoute   element={<Home />}/> } />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
    </div>
  )
}

export default App
