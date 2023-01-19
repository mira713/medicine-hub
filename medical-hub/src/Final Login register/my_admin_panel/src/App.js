import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import './App.css'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import ProListing from './ProListing'
import ProCreate from './ProCreate'
import ProDetail from './ProDetail'
import ProEdit from './ProEdit'

function App() {
  return (
    <>
      <ToastContainer></ToastContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/listing" element={<ProListing />}></Route>
          <Route path="/create" element={<ProCreate />}></Route>
          <Route path="/detail" element={<ProDetail />}></Route>
          <Route path="/edit" element={<ProEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
