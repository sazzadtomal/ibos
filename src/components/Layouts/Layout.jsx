import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const Layout = () => {
    return (
        <section className="">
            <Header/>
            <main className="flex-grow mt-24 w-full xl:w-[80%] m-auto">
                <Outlet />
            </main>
            <Footer/>
            
        </section>
    )
}

export default Layout