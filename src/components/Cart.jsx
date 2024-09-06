import CartItem from "./CartItem";
import CheckoutDetails from "./CheckoutDetails";

const Cart = () => {
  return (
    <section className="flex mt-48 gap-32 ">
      <main className="flex-grow min-h-[70vh]">
        <h2 className="text-[2.8rem] font-semibold mb-8 ">
          An overview of your order
        </h2>
        <div>
          <CartItem />
        </div>
      </main>
      <aside className=" basis-1/3 font-medium text-[2.2rem] pr-16 shrink-0">
        <CheckoutDetails />
      </aside>
    </section>
  );
};

export default Cart;
