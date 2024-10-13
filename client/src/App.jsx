import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Home from './Components/Home'
import ForgotPassword from './Components/ForgotPassword'
import ResetPassword from './Components/ResetPassword'
import UserDashboard from './Components/userDashboard'
import Admin from './Components/Admin'

// App.jsx



function App() {

  return (
    <BrowserRouter>
    
      <Routes>
        <Route path = "/" element={<Home />}></Route>
        <Route path = "/signup" element={<Signup />}></Route>
        <Route path = "/login" element={<Login />}></Route>
        <Route path = "/forgotPassword" element={<ForgotPassword />}></Route>
        <Route path = "/resetPassword/:token" element={<ResetPassword />}></Route>
        <Route path = "/dashboard" element={<UserDashboard />}></Route>
         
        <Route path = "/admin" element = {<Admin />}></Route>
       
      </Routes>
    </BrowserRouter>
  )
}

export default App