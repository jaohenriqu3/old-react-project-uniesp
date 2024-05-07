import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/Home/index.tsx'
import Header from './components/Header/index-header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <BrowserRouter> 
    <Header /> 
   <Routes> 
    <Route path='/' element={<Home/>}> </Route>
    <Route path='/' element={<Home/>}> </Route>
x   </Routes>
  </BrowserRouter>
  </React.StrictMode>,
)