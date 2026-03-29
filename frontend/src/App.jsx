import { Navigate, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './page/Home'
import Login from './page/Login'
import Signup from './page/Signup'
import { useState } from 'react'
import RefreshHandler from './utils/RefreshHandler'

const PrivateRoute = ({ children, isAuth }) => {
  return isAuth ? children : <Navigate to="/login" replace />
}

function App() {
 const [isAuth, setIsAuth] = useState(!!localStorage.getItem("token"))

  return (
    <div>
      <RefreshHandler setIsAuth={setIsAuth} /> 

      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        <Route
          path="/home"
          element={
            <PrivateRoute isAuth={isAuth}>
              <Home />
            </PrivateRoute>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App