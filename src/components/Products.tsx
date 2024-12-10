// import Image from "next/image";
// import Bedroom from "../public/bedroom.png"
import React from 'react';

interface Card {
  name: string;
  age: number;
  description: string;
  image: string;
  price: string;
}

const data: Card[] = [
  {
    name: 'Syltherine',
    price: 'Rp 2.500.000',
    age: 30,
    image: 'Images.png',
    description: 'Stylish cafe chair',
  },
  {
    name: 'Leviosa',
    price: 'Rp 2.500.000',
    age: 25,
    image: 'Images (6).png',
    description: 'Stylish cafe chair',
  },
  {
    name: 'Lolito',
    price: 'Rp 7.000.000',
    age: 28,
    image: 'Images (1).png',
    description: 'Luxury big sofa.',
  },
  {
    name: 'Respira',
    price: 'Rp 500.000',
    age: 28,
    image: 'Images (2).png',
    description: 'Outdoor bar table and stool',
  },
  {
    name: 'Grifo',
    price: 'Rp 1.500.000',
    age: 28,
    image: 'Images (3).png',
    description: 'Night lamp',
  },
  {
    name: 'Muggo',
    price: 'Rp 150.000',
    age: 28,
    image: 'Images (5).png',
    description: 'Small mug',
  },
  {
    name: 'Pingky',
    price: 'Rp 7.000.000',
    age: 28,
    image: 'Images (5).png',
    description: 'Cute bed set',
  },
  {
    name: 'Potty',
    price: 'Rp 500.000',
    age: 28,
    image: 'image 8.png',
    description: 'Minimalist flower pot',
  },
];

export default function Products() {
  return (
    <div className="product">
      <h2 className="text-center p-4 font-bold text-3xl">Our Products</h2>
      <div className="cardsContainer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {data.map((card, index) => (
          <div
            className="card border shadow-md rounded-lg overflow-hidden"
            key={index}
            style={{ width: '15rem' }}
          >
            <img
              src={card.image}
              alt={card.name}
              style={{ width: '100%', height: '15rem', objectFit: 'cover' }}
              className="card-img-top"
            />
            <div className="card-body p-4">
              <h5 className="card-title text-lg font-bold">{card.name}</h5>
              <p className="card-text text-sm text-gray-600">{card.description}</p>
              <h5 className="card-title text-md font-bold text-blue-600">{card.price}</h5>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <button className="productBtn text-[#B88E2F] p-2 border-2 border-[#B88E2F] rounded-md hover:bg-[#B88E2F] hover:text-white transition">
          Show More
        </button>
      </div>
    </div>
  );
}
