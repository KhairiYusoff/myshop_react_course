
import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="heading">MY SHOP</h1>
            <ul className="menu">
                <li>Home</li>
                <li>Products</li>
                <li>Contact</li>
                <li>About</li>
            </ul>
            <div className="buttons">
                <button>Register</button>
                <button>Login</button>

            </div>
        </nav>
    )
}

export default Navbar