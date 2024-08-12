import react, {useContext} from "react"
import Auth from "./components/Auth"
import Profile from "./components/Profile"
import Review from "./components/Review"
import Navbar from "./components/Navbar"
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import { UserContext } from "./context/UserProvider"

function App() {

  const {token, logout} = useContext(UserContext)

  return (
    <>
    {token && <Navbar logout = {logout} />}
      <div id="app">
        <Routes>
          <Route path="/" element={token ? <Navigate to = "/profile" /> : <Auth />} />
          <Route path="profile" element={token ? <Profile /> : <Navigate to = "/" />} />
          <Route path="review" element={token ? <Review /> : <Navigate to ="/" />} />
        </Routes>
      </div>
    </>
  )
}

export default App
