import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import ContactUs from './pages/ContactUs'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path="/contactus" element={<ContactUs/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
