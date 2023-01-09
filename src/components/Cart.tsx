import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import { useCartContext } from '../context/ShoppingCartContext';

export default function Cart() {
  const cart = useCartContext();
  return (
    <>
      <Offcanvas
        show={cart.cartIsOpen}
        placement="end"
        onHide={cart.toggleCart}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
      </Offcanvas>
    </>
  );
}
