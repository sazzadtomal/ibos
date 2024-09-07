import { Routes,Route } from "react-router-dom"
import Layout from "./components/Layouts/Layout"
import UserManagement from "./components/Layouts/UserManagement"
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import Products from "./Pages/Products"
import Cart from "./Pages/Cart"
import Home from "./Pages/Home"
import Custom from "./Pages/Custom"
import Blog from "./Pages/Blog"
import Categories from "./Pages/Categories"
import Error from "./Pages/Error"
import RequireAuth from "./components/Authorization/RequireAuth"
import PersistLogin from "./components/Authorization/PersistLogin"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"


function App() {
  const {pathname}=useLocation();

  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: "smooth" })
  },[pathname])
  
  return (
    <Routes>
      <Route path="/">
        <Route path="user_management" element={<UserManagement/>}>
           <Route path="signup" element={<Signup/>}/>
           <Route path="login" element={<Login/>}/>
           <Route path="*" element={<Error/>} />
        </Route>

        <Route element={<PersistLogin/>}>
          <Route element={<RequireAuth/>}>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="products" element={<Products/>}/>
                <Route path="categories" element={<Categories/>}/>
                <Route path="blog" element={<Blog/>}/>
                <Route path="custom" element={<Custom/>}/>
                <Route path="cart" element={<Cart/>}/>
                <Route path="*" element={<Error/>} />
            </Route>
          </Route>
        </Route>




      </Route>
    </Routes>
  )
}

export default App
