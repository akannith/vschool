import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Meme from "./components/Meme"
import SavedMemes from './components/SavedMemes'

function App() {
  return (
    <div>
        <Header />
        <Meme />
        <SavedMemes />
    </div>
)
}

export default App
