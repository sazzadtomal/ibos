import CartItem from "../Cart/CartItem";
import CheckoutDetails from "../Cart/CheckoutDetails";
import { CartContext } from "../../context/CartProvider";
import { useContext } from "react";

const Cart = () => {

  const {item}=useContext(CartContext)

  return (
    <section className="flex mt-48 gap-32 ">
      <main className="flex-grow min-h-[70vh]">
        <h2 className="text-[2.8rem] font-semibold mb-8 ">
          An overview of your order
        </h2>
        <div>
          {item.map((product)=><CartItem key={product.title} {...product} />)}
        </div>
      </main>
      <aside className=" basis-1/3 font-medium text-[2.2rem] pr-16 shrink-0">
        <CheckoutDetails />
      </aside>
    </section>
  );
};

export default Cart;
