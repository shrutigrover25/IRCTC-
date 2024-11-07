import React from "react";
import "./HomePage.css";
import { useState } from "react";
import Header from "./Header";

const HomePage = () => {
  const [formData, setFormData] = useState({ from: "", to: "", date: "" });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle form data submission
    console.log(formData);
  };

  return (
    <div className="homepage">
      <Header></Header>
      <h2>Book Your Train Ticket</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="from">From</label>
          <input
            type="text"
            id="from"
            placeholder="Enter Departure Station"
            value={formData.from}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="to">To</label>
          <input
            type="text"
            id="to"
            placeholder="Enter Arrival Station"
            value={formData.to}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Search Trains</button>
      </form>
    </div>
  );
};

export default HomePage;
