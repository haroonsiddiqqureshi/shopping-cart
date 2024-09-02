"use client";

import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface ItemCartProps {
  itemname: string;
  itemPrice: number;
  handleIncremental: () => void;
  handleDecremental: () => void;
  quantity: number;
  totalPrice: string;
}

const ItemCart: React.FC<ItemCartProps> = ({
  itemname,
  itemPrice,
  handleIncremental,
  handleDecremental,
  quantity,
  totalPrice,
}) => {
  const getImagePath = (name: string) => {
    return `/images/${name.toLowerCase().replace(/ /g, '-')}.jpeg`;
  };

  return (
    <div className="flex bg-white p-4 rounded-lg shadow-md border border-gray-300 space-x-4">
      <img
        src={getImagePath(itemname)}
        alt={itemname}
        className="w-32 h-32 object-cover rounded-md"
      />
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-800">{itemname}</h2>
          <p className="text-lg text-gray-600 font-medium">
            {itemPrice.toLocaleString()} บาท
          </p>
        </div>
        <div className="flex items-center mt-4">
          <button
            className="p-2 bg-blue-200 rounded-full hover:bg-blue-300 transition text-gray-700"
            onClick={handleDecremental}
          >
            <RemoveIcon />
          </button>
          <span className="text-2xl font-semibold text-gray-800 mx-4">{quantity}</span>
          <button
            className="p-2 bg-blue-200 rounded-full hover:bg-blue-300 transition text-gray-700"
            onClick={handleIncremental}
          >
            <AddIcon />
          </button>
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mt-4">{totalPrice} บาท</h2>
      </div>
    </div>
  );
};

export default ItemCart;
