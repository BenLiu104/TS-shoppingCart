import React, { useState } from 'react';
import { Offcanvas, Stack } from 'react-bootstrap';
import { useCartContext } from '../context/ShoppingCartContext';
import CartItem from './CartItem';
import burgers from '../data/burgers.json';

export default function Cart() {
  const cart = useCartContext();
  function countTotal(): number {
    let total = 0;
    cart.cartItems.forEach((item) => {
      let burger = burgers.find((burger) => burger.id == item.id);
      total += item.quantity * (burger?.price || 0);
    });
    return total;
  }
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
        <Offcanvas.Body>
          <Stack direction="vertical">
            {cart.cartItems.map((item) => {
              return <CartItem key={item.id} {...item} />;
            })}
          </Stack>
        </Offcanvas.Body>
        <div>Total$: {countTotal()}</div>
      </Offcanvas>
    </>
  );
}
