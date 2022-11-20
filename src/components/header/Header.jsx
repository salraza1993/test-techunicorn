import TopStrip from './TopStrip'

import './Header.scss'
import Navigation from './Navigation'

function Header({cartItems}) {
  return <header className="main__header">
    <TopStrip />
    <Navigation cartItems={cartItems} />
  </header>
  
}

export default Header