import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar as NavbarBS, Nav, Button } from 'react-bootstrap';
import { useCartContext } from '../context/ShoppingCartContext';
import Cart from './Cart';

export default function Navbar() {
  const cart = useCartContext();

  return (
    <>
      <Cart />
      <NavbarBS sticky="top">
        <Nav className="me-auto">
          <Nav.Link to={'/TS-shoppingCart/'} as={Link}>
            Home
          </Nav.Link>
          <Nav.Link to={'/TS-shoppingCart/store'} as={Link}>
            Store
          </Nav.Link>
        </Nav>

        <Button
          style={{ width: '3rem', height: '3rem', position: 'relative' }}
          className="rounded-circle"
          variant="outline-primary"
          onClick={cart.toggleCart}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-cart-fill"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
          <div
            className="rounded-circle"
            style={{
              position: 'absolute',
              width: '1.5rem',
              height: '1.5rem',
              bottom: 0,
              right: 0,
              background: 'red',
              color: 'white',
              transform: 'translate(25%,25%)',
            }}
          >
            {cart.countTotal()}
          </div>
        </Button>
      </NavbarBS>
    </>
  );
}
