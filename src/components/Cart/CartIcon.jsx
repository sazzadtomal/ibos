import cart from "../../assets/icons/added.png"
import { Link } from "react-router-dom"
import useCart from "../../hooks/useCart"


const CartIcon = () => {
  const {totalItem}=useCart()
  
  return (
    <Link to="/cart" className="shrink-0 ">
      <div className="relative flex ">
                    <img className="w-6 h-6 md:w-10 lg:h-10 shrink-0" src={cart} alt="cartIcon" />
                    <div className="absolute w-6 h-6 flex justify-center top-4 left-3 lg:top-6 lg:left-4 rounded-full bg-black text-white">{totalItem}</div>
      </div>
    </Link>
    
  )
}

export default CartIcon