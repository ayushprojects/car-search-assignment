import React from "react";
import "../App.css";
export default function CarCard({ car }) {
  return (
    <>
      <div className="car-card">
        <img className="car-img" src={car.image} alt={car.name} />
        <p className="car-name">{car.name}</p>
        <div className="specs">
          <div>
            <p>color: {car.color}</p>
            <p>model:{car.model}</p>
          </div>
          <div>
            <p>peopel:{car.people}</p>
            <p>price:{car.price}</p>
          </div>
        </div>
        <button className="rent-btn">Rent now</button>
      </div>
    </>
  );
}
