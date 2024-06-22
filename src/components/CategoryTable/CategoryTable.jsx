import React from "react";
import "./CategoryTable.css";

const CategoryTable = () => {
  return (
    <div className="category-table">
      <div className="category-header">
        <div className="category-title active">Bangalore</div>
        <div className="category-title">Delhi</div>
        <div className="category-title">Mumbai</div>
        <div className="category-title">Pune</div>
        <div className="category-title">Chennai</div>
        <div className="category-title">Hyderabad</div>
      </div>
      <div className="category-content">
        <div className="category-column">
          <h4>PG in Bangalore</h4>
          <ul>
            <li>PG in Bellandur</li>
            <li>PG in BTM Layout</li>
            <li>PG in HSR Layout</li>
            <li>PG in JP Nagar</li>
            <li>PG in Koramangala</li>
            <li>PG in Manyata</li>
            <li>PG in Marathahalli</li>
          </ul>
        </div>
        <div className="category-column">
          <h4>Hostels in Bangalore</h4>
          <ul>
            <li>Hostels in Kundalahalli</li>
            <li>Hostels in Muruthi Nagar</li>
            <li>Hostels in Nagavara</li>
            <li>Hostels in SG Palya</li>
            <li>Hostels in Tavarekere</li>
            <li>Hostels in Veerannapalya</li>
          </ul>
        </div>
        <div className="category-column">
          <h4>Rooms for Rent in Bangalore</h4>
          <ul>
            <li>Rooms for rent in Hoodi</li>
            <li>Rooms for rent in Koramangala</li>
            <li>Rooms for rent in RT Nagar</li>
            <li>Rooms for rent in Sarjapur</li>
            <li>Rooms for rent in Tanisandra</li>
            <li>Rooms for rent in Yeshwanthpur</li>
          </ul>
        </div>
        <div className="category-column">
          <h4>Coliving in Bangalore</h4>
          <ul>
            <li>Coliving in Bellandur</li>
            <li>Coliving in BTM Layout</li>
            <li>Coliving in HSR Layout</li>
            <li>Coliving in JP Nagar</li>
            <li>Coliving in Koramangala</li>
            <li>Coliving in Manyata</li>
            <li>Coliving in Marathahalli</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoryTable;
