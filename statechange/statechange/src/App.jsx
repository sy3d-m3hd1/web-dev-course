import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isDarkMode, setisDarkMode] = useState(false)
  const toggleTheme = () => {
    setisDarkMode(prevMode=>!prevMode)
  }
  const appStyles = {
    backgroundColor: isDarkMode ? '#242424' : '#ffffff',
    color: isDarkMode ? '#ffffff' : '#242424',
    minHeight: '100vh', // Ensures background covers full screen
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.3s ease', // Smooth color transition
     };

  return (
    <>
      <div style={appStyles}>
        <h1>Current Theme: {isDarkMode ? "dark" : "Light"}</h1>
        <button onClick={toggleTheme} style={{ padding: '10px 20px', cursor: 'pointer' }}>Click me</button>
      </div>
     
    </>
  )
}

export default App
