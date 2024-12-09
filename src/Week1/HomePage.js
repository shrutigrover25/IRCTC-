import React, { useState } from "react";
import Header from "../Week2/Header";
import "./HomePage.css"; // Import the CSS file for styling

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
      <Header /> {/* Include the Header here */}
      <h2>Book Your Train Ticket</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="from">From</label>
          <input
            type="text"
            id="from"
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
