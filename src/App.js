import React, { useState } from "react";
import { useEffect } from "react";
import CarList from "./components/CarList";
import data from "./data/data.json";
import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";

export function App() {
  const [carData, setCarData] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  useEffect(() => {
    setCarData(data);
    setFilteredCars(data);
  }, []);

  const [currentPage, setcurrentPage] = useState(1);
  const [postPerPage, setpostPerPage] = useState(6);

  const lastpostindex = currentPage * postPerPage;
  const firstpostindex = lastpostindex - postPerPage;
  const currentpost = carData.slice(firstpostindex, lastpostindex);

  const handleSearch = (searchTerm) => {
    console.log("Search term:", searchTerm); // Check if searchTerm is received
    const filteredData = carData.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log("Filtered data:", filteredData); // Check if filteredData is correct
    setFilteredCars(filteredData);
  };

  return (
    <div className="app">
      <SearchBar handleSearch={handleSearch} />
      <CarList carData={currentpost} />
      <Pagination
        totalPosts={carData.length}
        postPerPage={postPerPage}
        setcurrentPage={setcurrentPage}
      />
    </div>
  );
}
