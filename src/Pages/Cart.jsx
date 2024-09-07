import useCart from "../hooks/useCart";
import CartItem from "../components/Cart/CartItem";
import CheckoutDetails from "../components/Cart/CheckoutDetails";


const Cart = () => {

  const {item}=useCart()

  return (
    <section className="flex flex-col lg:flex-row mt-24 lg:mt-48 gap-32 p-12 xl:p-0">
      <main className="flex-grow min-h-[70vh]">
        <h2 className="text-[1.6rem] md:text-[2.8rem] font-semibold mb-8 ">
          An overview of your order
        </h2>
        <div>
          {item.map((product)=><CartItem key={product.title} {...product} />)}
        </div>
      </main>
      <aside className=" basis-1/3 font-medium text-[1.4rem] md:text-[2.2rem] pr-0 lg:pr-16 shrink-0">
        <CheckoutDetails />
      </aside>
    </section>
  );
};

export default Cart;
