import { Routes,Route } from "react-router-dom"
import Layout from "./components/Layout"
import UserManagement from "./components/UserManagement"
import Signup from "./components/Signup/Signup"
import Login from "./components/Login/Login"

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route path="user_management" element={<UserManagement/>}>
           <Route path="signup" element={<Signup/>}/>
           <Route path="login" element={<Login/>}/>
           <Route path="*" element={<div>Error404</div>} />
        </Route>

        <Route path="/" element={<Layout/>}>
              
        </Route>




      </Route>
    </Routes>
  )
}

export default App
