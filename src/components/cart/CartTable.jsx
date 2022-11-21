import './CartTable.scss'
import { Link } from 'react-router-dom'

function CartTable({cartItems, removeFromCart, setCartItems, increaseQuantity, decreaseQuantity}) {

  

  
  return <div className="cart__table__container">
    <div className="cart__table__head">
      <div className="cart__table__row head__row">
        <div className="cart__table__cell">Product Name</div>
        <div className="cart__table__cell">Price</div>
        <div className="cart__table__cell">Quantity</div>
        <div className="cart__table__cell">Total</div>
      </div>
    </div>
    <div className="cart__table__body merriweather">
      {
        cartItems.length > 0 ? cartItems.map((item, index) => {
          return <div className="cart__table__row" key={item.id}>
            <div className="cart__table__cell productImage">
              <div className="d-flex gap-3 align-items-center">
                <div className="product__image">
                  <img src={item.image} alt="" />
                </div>
                {item.title}
              </div>
            </div>
            <div className="cart__table__cell">${item.price}</div>
            <div className="cart__table__cell">
              <div className="quantity">
                <span className='minus' onClick={() => decreaseQuantity(index)}>-</span>
                <span className='value'>{item.quantity}</span>
                <span className='plus' onClick={ (e) => increaseQuantity(index) }>+</span>
              </div>
            </div>
            <div className="cart__table__cell">
              <div className="d-flex justify-content-between align-items-center w-100">
                <strong>${item.price * item?.quantity || 1}</strong>
                <div className="trash" onClick={() => removeFromCart(item.id)}>
                  <svg className="pe-none" width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 4.66699H17.3333V0.666992H6.66667V4.66699H0V7.33366H1.42533L2.75867 26.0003H21.2413L22.5747 7.33366H24V4.66699ZM9.33333 3.33366H14.6667V4.66699H9.33333V3.33366ZM18.7587 23.3337H5.24133L4.09867 7.33366H19.9013L18.7587 23.3337Z" fill="currentcolor"/>
                    <path d="M10.6667 10H8V20.6667H10.6667V10Z" fill="currentcolor"/>
                    <path d="M15.9997 10H13.333V20.6667H15.9997V10Z" fill="currentcolor"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        }) 
        : <div className="bg-light d-flex align-items-center justify-content-center py-5">
          <p className='text-center gap-3 d-flex flex-column'> 
            You don't have any items to you cart. 
            <br />
            <Link to="/" className='btn btn-success px-4'>Continue Shopping</Link>
          </p> 
        </div>
      }      
    </div>
  </div>
}

export default CartTable