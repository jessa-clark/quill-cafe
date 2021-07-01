import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './Navbar.css'


function Navbar() {
  return (
    <nav className="nav">
      <Link id="name" to="/">Quill Café</Link>
      <img id="quill" src="https://i.imgur.com/yLZIDcrs.png"/>
      <h5 id="quote">Grab a beverage ☕ and connect through poetry 💓</h5>
    </nav>
  )
}

export default Navbar;