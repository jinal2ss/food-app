import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {

  const cartStyle = {
    background: '#F59E0D',
    display: 'flex',
    padding: '6px 12px',
    borderRadius: '50px',
    alignItems: 'center',
  }

  const linkStyle = {
    marginLeft: '20px',
  }

  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4">
        <Link to="/">
          <img style={{ height: 45 }} src="/Images/Logo.png" alt="Logo" />
        </Link>

        <ul className="flex items-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li style={linkStyle}>
            <Link to="/products">Products</Link>
          </li>
          <li style={linkStyle}>
            <Link to="/cart">
              <div style={cartStyle}>
                <span className="text-white">10</span>
                <img className="ml-2" style={{height: 30}} src="/Images/cart.png" alt="cart"/>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
