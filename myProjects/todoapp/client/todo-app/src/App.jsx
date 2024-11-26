import { useContext } from 'react'
import Auth from './components/Auth'
import Task from './components/Task'
import Navbar from './components/Navbar'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import { UserContext } from "./contextProvider/UserProvider"

function App() {
  
  const {token, logout} = useContext(UserContext)

  return (
    <>
       {token && <Navbar logout = {logout} /> } 
       <div id='app'>
        <Routes>
          <Route path='/' element={token ? <Navigate to = "/task" /> : <Auth /> } />
          <Route path='task' element={token ? <Task /> : <Navigate to ="/" /> } />
        </Routes>
       </div>
    </>
  )
}

export default App
