import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './Navbar.css'


function Navbar() {
  return (
    <header>
    <nav className="nav">
      <Link id="name" to="/">Quill Café</Link>
      {/* <img id="quill" src="https://i.imgur.com/yLZIDcrs.png" alt="quill"/> */}
      <h5 id="quote">Grab a beverage ☕ and connect through poetry 💓</h5>
    </nav>
    </header>
  )
}

export default Navbar;