import cart from "../assets/icons/added.png"
import { Link } from "react-router-dom"


const CartIcon = () => {
  return (
    <Link to="/cart">
      <div className="relative flex shrink-0 ">
                    <img className="w-12 h-12 shrink-0" src={cart} alt="" />
                    <div className="absolute w-6 h-6 flex justify-center top-8 left-6 rounded-full bg-black text-white">2</div>
                </div>
    </Link>
    
  )
}

export default CartIcon