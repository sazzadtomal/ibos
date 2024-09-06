import Logo from "./Logo_small"
import cart from "../assets/icons/added.png"
import user from "../assets/icons/user.png"

const Header = () => {
  return (
    <header className="fixed top-0 w-full h-24 flex justify-center items-center border-header">
        <nav className='w-full xl:w-[80%] flex items-center justify-between'>
            <Logo/>
            <ul className='flex [&>*]:mx-16 text-[1.8rem] font-medium justify-evenly'>
                <li>Home</li>
                <li>Products</li>
                <li>Categories</li>
                <li>Custom</li>
                <li>Blog</li>
            </ul>

            <div className="flex items-center gap-8">
                <div className="relative flex shrink-0 ">
                    <img className="w-12 h-12 shrink-0" src={cart} alt="" />
                    <div className="absolute w-6 h-6 flex justify-center top-8 left-6 rounded-full bg-black text-white">2</div>
                </div>
                <img className="shrink-0" src={user} alt="" />
            </div>

        </nav>
    </header>
  )
}

export default Header