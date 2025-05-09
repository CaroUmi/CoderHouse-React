import "./NavBar.css";
import logo from '../../assets/image/logo-color.png';
import profile from '../../assets/image/profile.png';
import CartWidget from "../CartWidget/CartWidget";


function NavBar() {
  return (
    <header className="main-header">
    <nav className="navbar">
      <div className="container-nav">
        <img className="logo" src={logo} alt="logo de marca" />
        <label className="icon-burger" for="check-menu"><i className="fa-solid fa-bars"></i></label>
        <input className="nav-checkbox" type="checkbox" id="check-menu" />
        <ul className="nav-list">
          <li className="nav-item"><a href="index.html">INICIO</a></li>
          <li className="nav-item"><a href="pages/about.html">NOSOTROS</a></li>
          <li className="nav-item"><a href="pages/registro.html">REGISTRO</a></li>
          <li className="nav-item"><a href="pages/contact.html">CONTACTO</a></li>
          <li className="nav-item"><a href="pages/list-products.html">PRODUCTOS</a></li>
          <div className="user-data">
            <img className="user-img" src={profile} alt="imagen del usuario" />
            <p className="user-name">John Doe</p>
          </div>
        </ul>
      </div>
      <CartWidget />
    </nav>
  </header>
  )
}

export default NavBar