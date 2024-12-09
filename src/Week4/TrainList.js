import React, { useState, useEffect } from "react";
import TrainCard from "../Week3/Traincard"; // Importing TrainCard component

const TrainList = () => {
  const [trains, setTrains] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mimic componentDidMount with useEffect to fetch train data
  useEffect(() => {
    // Simulate an API call to fetch train data
    fetch("https://api.example.com/trains")
      .then((response) => response.json())
      .then((data) => {
        setTrains(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });

    // Mimic componentWillUnmount: Cleanup logic when the component is unmounted
    return () => {
      console.log("TrainList component will unmount");
      // Perform any necessary cleanup
    };
  }, []); // Empty dependency array ensures this effect runs only once (on mount)

  if (isLoading) {
    return <div>Loading trains...</div>;
  }

  if (error) {
    return <div>Error fetching trains: {error.message}</div>;
  }

  return (
    <div>
      {trains.map((train) => (
        <TrainCard key={train.id} train={train} />
      ))}
    </div>
  );
};

export default TrainList;
