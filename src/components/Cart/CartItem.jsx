import close from "../../assets/icons/close.png"
import useCart from "../../hooks/useCart"

const CartItem = ({id,title,image,price,quantity}) => {
  const {increment,decrement,removeItem}=useCart()

  return (
    <div className="relative form-background px-8 pt-16 rounded-lg">
                    <img onClick={()=>removeItem(id)} className="absolute top-6 right-8 cursor-pointer" src={close} alt="close" />
                       <div className=" flex items-center gap-8">
                        <div className="flex items-center [&>*]:p-2 font-semibold border-input text-[2rem] rounded-lg">
                            <div onClick={()=>decrement(id)} className="muted cursor-pointer">-</div>
                            <div>{quantity}</div>
                            <div onClick={()=>increment(id)} className="muted cursor-pointer">+</div>
                        </div>
                        <div>
                            <img className="w-[9rem] h-[9rem] border rounded-lg object-contain" src={image} alt={title} />
                        </div>
                    
                        <h3 className="text-[1.6rem] font-bold self-start px-4">{title}</h3>
                        </div>
                        <div className="w-full flex justify-end text-[2rem] font-semibold">€{price}</div>
                        <div className="line mt-8"></div>
                   </div>
  )
}

export default CartItem