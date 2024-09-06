import cartProduct from "../assets/cart-product.png"
import close from "../assets/icons/close.png"

const CartItem = () => {
  return (
    <div className="relative form-background px-8 pt-16 rounded-lg">
                    <img className="absolute top-6 right-8" src={close} alt="" />
                       <div className=" flex items-center gap-8">
                        <div className="flex items-center [&>*]:p-2 font-semibold border-input text-[2rem] rounded-lg">
                            <div className="muted">-</div>
                            <div >2</div>
                            <div className="muted">+</div>
                        </div>
                        <div>
                            <img className="w-[9rem] h-[9rem] border rounded-lg" src={cartProduct} alt="" />
                        </div>
                    
                        <h3 className="text-[1.6rem] font-bold self-start px-4">Recliner Chair Steel</h3>
                        </div>
                        <div className="w-full flex justify-end text-[2rem] font-semibold">€299.00</div>
                        <div className="line mt-8"></div>
                   </div>
  )
}

export default CartItem