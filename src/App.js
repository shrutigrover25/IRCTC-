import React from "react";
import HomePage from "./Week1/HomePage";
import Traincard from "./Week3/Traincard";
import TrainList from "./Week4/TrainList";

function App() {
  // Define a train object with necessary properties
  const trainData = {
    name: "Express Train",
    from: "New York",
    to: "Los Angeles",
    departureTime: "10:00 AM",
    arrivalTime: "8:00 PM",
    fare: 1500,
  };

  return (
    <div>
      {/* Pass the train data as a prop */}
      <HomePage></HomePage>
    </div>
  );
}

export default App;
