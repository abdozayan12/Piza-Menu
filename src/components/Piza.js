import React from 'react';
import pizzaData from './Data';
import '../App.css'; // Ensure App.css has the right styles

export default function Piza() {
  return (
    <div className="container">
      <h1>Our Menu</h1>
      <ul className="pizza-list">
        {pizzaData.map((pizza) => (
          <li
            className="pizza-item"
            key={pizza.id}
            style={{
              opacity: pizza.soldOut ? 0.5 : 1,
            }}
          >
            <img
              src={pizza.photoName}
              alt={pizza.name}
              className="pizza-image"
            />
            <div className="pizza-info">
              <h2>{pizza.name}</h2>
              <p>{pizza.ingredients}</p>
              <strong>{pizza.soldOut ? 'SOLD OUT' : `$${pizza.price}`}</strong>
            </div>
            <button type="button">More Info</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
