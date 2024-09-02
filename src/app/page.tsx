"use client";

import React from "react";
import ItemCart from "./item-cart";

interface Product {
  itemname: string;
  price: number;
}

const products: Product[] = [
  { itemname: "iPhone 15 Pro", price: 39900 },
  { itemname: "iPhone 15", price: 28900 },
  { itemname: "iPad Pro", price: 34900 },
  { itemname: "iPad Air", price: 22900 },
  { itemname: "iPad", price: 14900 },
  { itemname: "iPad mini", price: 17900 },
  { itemname: "MacBook Air", price: 39900 },
  { itemname: "MacBook Pro", price: 49900 },
  { itemname: "iMac", price: 59900 },
  { itemname: "Mac mini", price: 23900 },
  { itemname: "Mac Studio", price: 48900 },
];

const Home: React.FC = () => {
  const [cart, setCart] = React.useState(
    products.map((product) => ({ ...product, quantity: 0 }))
  );

  const handleIncremental = (itemname: string) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.itemname === itemname
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const handleDecremental = (itemname: string) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.itemname === itemname && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Shopping Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cart.map((item) => (
          <ItemCart
            key={item.itemname}
            itemname={item.itemname}
            itemPrice={item.price}
            quantity={item.quantity}
            totalPrice={(item.price * item.quantity).toLocaleString()}
            handleIncremental={() => handleIncremental(item.itemname)}
            handleDecremental={() => handleDecremental(item.itemname)}
          />
        ))}
      </div>
      <div className="mt-8 flex items-center justify-between bg-white p-4 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800">Total:</h2>
        <h2 className="text-2xl font-semibold text-gray-800">
          {totalPrice.toLocaleString()} บาท
        </h2>
      </div>
    </div>
  );
};

export default Home;
