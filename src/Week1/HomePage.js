import React, { useState, useEffect } from "react";
import Header from "../Week2/Header";
import "./HomePage.css"; // Import the CSS file for styling

const HomePage = () => {
  const [formData, setFormData] = useState({ from: "", to: "", date: "" });
  const [trainList, setTrainList] = useState([]); // State for storing train data
  const [isLoading, setIsLoading] = useState(false); // Loading state for API calls

  // Handle form input changes
  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Log form data on submission
    console.log("Form submitted:", formData);
    setIsLoading(true); // Start loading when form is submitted
  };

  // useEffect for making an API call whenever formData changes (after form submission)
  useEffect(() => {
    if (isLoading) {
      // Simulate API call
      setTimeout(() => {
        const mockTrains = [
          {
            id: 1,
            name: "Express 101",
            from: formData.from,
            to: formData.to,
            departure: "10:00 AM",
          },
          {
            id: 2,
            name: "Superfast 202",
            from: formData.from,
            to: formData.to,
            departure: "2:00 PM",
          },
        ];
        setTrainList(mockTrains); // Set the fetched train list
        setIsLoading(false); // Reset loading state after fetching data
      }, 2000); // Simulating a 2-second delay for the API call
    }
  }, [isLoading, formData]); // Dependency array: effect runs when isLoading changes

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
      {isLoading && <p>Loading trains...</p>}{" "}
      {/* Show loading message while fetching data */}
      {/* Display train list once the data is fetched */}
      {trainList.length > 0 && (
        <div>
          <h3>Available Trains:</h3>
          <ul>
            {trainList.map((train) => (
              <li key={train.id}>
                {train.name} - Departure: {train.departure}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HomePage;
