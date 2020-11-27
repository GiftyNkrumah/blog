import React from 'react'
import LoginContextProvider from './contexts/LoginContext'
import Bluestrokes from './Bluestrokes'

function App() {

  return (
    <LoginContextProvider>
      <Bluestrokes />
    </LoginContextProvider>  
  )
}

export default App