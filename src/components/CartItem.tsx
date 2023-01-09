import React from 'react';
import { useCartContext } from '../context/ShoppingCartContext';

import burgers from '../data/burgers.json';
interface CartItemPorps {
  id: number;
  quantity: number;
}
export default function CartItem({ id, quantity }: CartItemPorps) {
  const cart = useCartContext();
  let item = burgers.find((burger) => burger.id === id);
  return (
    <>
      <div>
        <img src={item?.imgURL} alt="" width={'100%'} />
        <div className="d-flex flex-column">
          <span>
            {item?.name} x {quantity}
          </span>
          <span>{item?.price}</span>
        </div>
        <div>Total: {item?.price * quantity}</div>
        <div onClick={() => cart.removeItem(id)}>Remove</div>
      </div>
    </>
  );
}
