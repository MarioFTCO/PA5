import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../screens/Home'
import Español from '../screens/Español'
import Ingles from '../screens/Ingles'
import Frances from '../screens/Frances'
import Login from '../screens/Login'
import Register from '../screens/Register'

function AppRouter() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" index element={<Home/>} />
            <Route path="/español" element={<Español/>} />
            <Route path="/frances" element={<Frances/>} />
            <Route path="/ingles" element={<Ingles/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default AppRouter