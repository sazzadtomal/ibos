
const CheckoutDetails = () => {
  return (
    <>
    <h2 className="text-[2.8rem] font-semibold mb-8 ">Oder details</h2>
            <div className="form-background px-6 p-4 order-border text-[2rem] muted rounded-lg">
                 <div className="[&>*]:my-6">
                     <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>€ 1071.00</span>
                     </div>
                     <div className="flex justify-between">
                        <span>Shipping</span>
                        <span>Free</span>
                     </div>
                     <div className="flex justify-between">
                        <span>Estimated Tax</span>
                        <span>€ -</span>
                     </div>
                 </div>
                 <div className="line"></div>

                 <div className="flex justify-between py-8 text-[2.4rem] text-black font-semibold">
                 <span>Total</span>
                 <span>€ 1071.00</span>
                 </div>
            </div>
            <button className="button button-primary w-full mt-8">Go to Checkout</button>
            </>
  )
}

export default CheckoutDetails