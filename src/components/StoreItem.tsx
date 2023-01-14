import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import formatCurrency from '../utilities/formatCurrency';
import { useCartContext } from '../context/ShoppingCartContext';
interface item {
  id: number;
  name: string;
  price: number;
  imgURL: string;
}
interface cart {
  id: number;
  quantity: number;
}
export default function StoreItem({ id, name, price, imgURL }: item) {
  let record = window.localStorage.getItem('cart');
  // let cartItem: cart[];
  const cart = useCartContext();

  if (record) {
    let cartItem = JSON.parse(record);
  } else {
    let cartItem = cart.cartItems;
  }

  const quantity = cart.getItemQuantity(id);
  useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(cart.cartItems));
  }, [cart]);
  return (
    <>
      <Card>
        <Card.Img src={imgURL} height="250" style={{ objectFit: 'cover' }} />
        <Card.Body className="d-flex flex-column ">
          <Card.Title className="d-flex justify-content-between align-items-end mb-4">
            <span className="fs-2">{name}</span>
            <span className="text-muted">{formatCurrency(price)}</span>
          </Card.Title>
          <div className="align-self-center">
            {quantity === 0 ? (
              <Button
                onClick={() => {
                  cart.increaseQuantity(id);
                }}
              >
                + add to Cart
              </Button>
            ) : (
              <div className="d-flex flex-column">
                <div className="d-flex gap-2">
                  <Button
                    onClick={() => {
                      cart.increaseQuantity(id);
                    }}
                  >
                    +
                  </Button>
                  <span className="fs-2">
                    {' '}
                    {quantity} <span className="text-muted fs-4">in Cart</span>{' '}
                  </span>
                  <Button
                    onClick={() => {
                      cart.decreaseQuantity(id);
                    }}
                  >
                    -
                  </Button>
                </div>
                <Button
                  className="btn-danger w-50 align-self-center"
                  onClick={() => {
                    cart.removeItem(id);
                  }}
                >
                  Remove
                </Button>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
