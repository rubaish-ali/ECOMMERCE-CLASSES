// // import './App.css'
// // import { BrowserRouter, Routes, Route } from "react-router-dom"
// // import Register from './pages/Register'
// // import Login from './pages/Login'
// // import { Toaster } from "react-hot-toast"
// // import Product from './pages/CeateProduct'
// // import UnAuthorized from './pages/unAuthorizedRoutes'
// // import ProtectedRoutes from './pages/ProtectedRoutes'
// // import Dashboard from './pages/Dashboard.jsx'


// function App() {
//   return (
//     // <div className="App">
//     //   {/* <BrowserRouter>
//     //     <Routes>
//     //       <Route path='/' element={<UnAuthorized><Register /></UnAuthorized>} />
//     //       <Route path='/login' element={<UnAuthorized><Login /></UnAuthorized>} />
//     //       <Route path='/products' element={<ProtectedRoutes><Product /></ProtectedRoutes>} />
       
//     //     {/* <Route path='/create-product' element={<ProtectedRoutes><CreaetProduct /></ProtectedRoutes>} /> */}

//     //   </Routes>
//     //   <Toaster />
//     // </BrowserRouter>
//     // <Dashboard /> */}
//     // </div>

//   )
// }

// export default App

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./page/Dashboard";
import CreateProduct from "./page/CreateProduct";
import AllProducts from "./page/AllProducts";

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/all-products" element={<AllProducts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
