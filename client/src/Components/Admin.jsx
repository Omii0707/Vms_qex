import React from 'react'
import { useAuth } from '../context/ContextProvider'
const Admin = () => {
  
  const {user} = useAuth()
  return (
    
    <div> i am Admin
    
  </div>
  )
}

export default Admin