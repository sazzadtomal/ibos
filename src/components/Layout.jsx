import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

const Layout = () => {
    return (
        <section className="">
            <Header/>
            <main className="flex-grow min-h-[70vh]">
                <Outlet />
            </main>
            <Footer/>
            
        </section>
    )
}

export default Layout