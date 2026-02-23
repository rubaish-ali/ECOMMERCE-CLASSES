import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from './pages/Register'
import Login from './pages/Login'
import { Toaster } from "react-hot-toast"
import Product from './pages/Product'
import UnAuthorized from './pages/unAuthorizedRoutes'
import ProtectedRoutes from './pages/ProtectedRoutes'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UnAuthorized><Register /></UnAuthorized>} />
        <Route path='/login' element={<UnAuthorized><Login /></UnAuthorized>} />
        <Route path='/products' element={<ProtectedRoutes><Product /></ProtectedRoutes>} />
        {/* <Route path='/create-product' element={<ProtectedRoutes><CreaetProduct /></ProtectedRoutes>} /> */}

      </Routes>
      <Toaster />
    </BrowserRouter>
  )
}

export default App
