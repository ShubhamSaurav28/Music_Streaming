import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import ContactUs from './pages/ContactUs'
import Streaming from './pages/Streaming'
import AllStreams from './pages/AllStreams'
import CreateStreamPage from './pages/CreateStreamPage'


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
          <Route path="/streaming" element={<Streaming/>}/>
          <Route path='/allstreams' element={<AllStreams/>}/>
          <Route path='/createstream' element={<CreateStreamPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
