import './CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


function CartWidget() {
  return (
    <div className="nav-cart section-header">
        <div id="btn-cart" className="cart-quantity">
          <FontAwesomeIcon icon={faCartShopping} className='icon' />
          <span id="quantity-items">0</span>
        </div>
        <div id="cart" className="cart close">
          <div className="header-cart">
            <h5>Mi Compra</h5>
            boton
          </div>
          <div id="body-cart" className="body-cart">
          </div>
          <div id="footer-cart" className="footer-cart">
            <div id="total-cart" className="cart-total">
              Total
            </div>
            boton
          </div>
        </div>
      </div>
  )
}

export default CartWidget