import { Link } from 'react-router-dom'
import heart from './../../assets/images/heart.svg'
import cart from './../../assets/images/cart.svg'
import user from './../../assets/images/user.svg'


const Navigation = ({cartItems}) => {
  return <div className="navigation__section">
    <div className="container">
      <div className="navigation__container [ d-flex justify-content-between align-items-center py-3 ]">
        <nav>
          <ul className="menus [ d-flex ]">
            <li className="menus__list"><Link className="menus__list__link active" to="/">Home</Link></li>
            <li className="menus__list"><Link className="menus__list__link" to="/">About</Link></li>
            <li className="menus__list"><Link className="menus__list__link" to="/">FAQ</Link></li>
            <li className="menus__list"><Link className="menus__list__link" to="/">Blog</Link></li>
          </ul>
        </nav>
        <div className="actionable__buttons">
          <Link to="/wishlist" type="button" className="button">
            {cartItems && <span className="cart-counter">0</span>}
            <img src={heart} alt="Wishlist icon" />
          </Link>
          <Link to="/cart" type="button" className="button">
            {cartItems && <span className="cart-counter">{cartItems?.length}</span>}
            <img src={cart} alt="Wishlist icon" />
          </Link>
          <button type="button" className="button">
            <img src={user} alt="Wishlist icon" />
          </button>
        </div>
      </div>
    </div>
  </div>
}

export default Navigation