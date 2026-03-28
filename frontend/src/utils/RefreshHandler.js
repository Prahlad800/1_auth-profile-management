import React, { useEffect } from 'react'
import { replace, useLocation, useNavigate } from 'react-router-dom'

function RefreshHandler({setIsAuth}) {
    const location = useLocation()
    const nevigate =useNavigate()
    useEffect(()=>{
        if(localStorage.getItem("token")){
            setIsAuth(true)
            if(location.pathname ==="/" || location.pathname ==="/login" || location.pathname ==="/signup")
            {
                nevigate("/home",{replace:false})
            }
        }

    },[location , nevigate,setIsAuth])
  return (
    null
  )
}

export default RefreshHandler
