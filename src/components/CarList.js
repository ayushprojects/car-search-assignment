import React from "react";
import CarCard from "./CarCard";
import "../App.css";
export function CarList({ carData }) {
  return (
    <div>
      <h1>Car List</h1>

      <div className="car-list">
        {carData.map((car, index) => (
          <CarCard car={car} key={index} />
        ))}
      </div>
    </div>
  );
}

export default CarList;
