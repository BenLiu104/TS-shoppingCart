import React, { createContext, useContext, ReactNode, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface contextType {
  children: ReactNode;
}
interface cartContext {
  getItemQuantity: (id: number) => number;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeItem: (id: number) => void;
  countTotal: () => number;
  cartItems: cartItem[];
  cartIsOpen: boolean;
  toggleCart: () => void;
}

interface cartItem {
  id: number;
  quantity: number;
}

const ShoppingCartContext = createContext({} as cartContext);

export function useCartContext() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: contextType) {
  const [cartItems, setCartItems] = useLocalStorage<cartItem[]>(
    'shopping-cart',
    []
  );
  const [cartIsOpen, setCartOpen] = useState(false);

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseQuantity(id: number) {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id == id) == null) {
        return [...currentItems, { id, quantity: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseQuantity(id: number) {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id == id)?.quantity == 1) {
        return currentItems.filter((item) => item.id != id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
    window.localStorage.setItem('cart', JSON.stringify(cartItems));
  }

  function removeItem(id: number) {
    setCartItems((currentItem) => {
      return currentItem.filter((item) => item.id !== id);
    });
  }
  function countTotal() {
    let count = 0;
    cartItems.forEach((item) => (count += item.quantity));
    return count;
  }
  function toggleCart() {
    setCartOpen((current) => !current);
  }

  return (
    <>
      <ShoppingCartContext.Provider
        value={{
          getItemQuantity,
          increaseQuantity,
          decreaseQuantity,
          removeItem,
          countTotal,
          cartItems,
          cartIsOpen,
          toggleCart,
        }}
      >
        {children}
      </ShoppingCartContext.Provider>
    </>
  );
}
