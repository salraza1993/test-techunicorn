import React, { useEffect, useState } from 'react'
import CartTable from '../components/cart/CartTable'
import CoupenCard from '../components/cart/CoupenCard'
import HeroBanner from '../components/herobanner/HeroBanner';

function Cart({cartItems, removeFromCart, setCartItems}) {
  const [cartTotals, setCartTotals] = useState(null);

  useEffect(() => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0)
    setCartTotals(Math.round(totalPrice * 100) / 100)
  }, [cartItems])
  return (
    <>
      <HeroBanner heading={'Shopping Bag'} banner={"https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da"} />
      <section className='product__listing__section'>
        <div className="container">
          <CartTable setCartItems={setCartItems} cartItems={cartItems} removeFromCart={removeFromCart} />
          <div className="row mt-5">
            <div className="col-12 col-lg-6">
              <CoupenCard />
            </div>
            <div className="col-12 col-lg-6">
              <div className="card__checkout__details">
                <h3 className="merriweather fw-bold mb-4">Cart Totals</h3>
                <ul className="details__list mb-4">
                  <li>
                    <span>Subtotal</span>
                    <strong>${cartTotals}</strong>
                  </li>
                  <li>
                    <span>Shipping</span>
                    <span>Free Shipping</span>
                  </li>
                  <li>
                    <span>Total</span>
                    <strong>${cartTotals}</strong>
                  </li>
                </ul>
                <button 
                  type="button" 
                  className={!cartItems.length > 0 ? "btn btn-primary px-4 btn-lg w-100 disabled" : "btn btn-primary px-4 btn-lg w-100"}>
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart