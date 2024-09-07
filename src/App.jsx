import { Routes,Route } from "react-router-dom"
import Layout from "./components/Layout"
import UserManagement from "./components/UserManagement"
import Signup from "./components/Signup/Signup"
import Login from "./components/Login/Login"
import Products from "./components/Products"
import Cart from "./components/Cart"
import Home from "./components/Home"
import Custom from "./components/Custom"
import Blog from "./components/Blog"
import Categories from "./components/Categories"
import Error from "./components/Error"
import RequireAuth from "./components/RequireAuth"
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
    </Routes>
  )
}

export default App
