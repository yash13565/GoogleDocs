import React, { useState } from 'react'

import './App.css'
import Home from './Home/Home'
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {


  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
      
      </BrowserRouter>
     
    </div>
  )
}

export default App
