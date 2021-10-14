import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";

const FoodDetails = () => {
  const { foodId } = useParams();
  const [foodDetails, setFoodDetails] = useState([]);

  useEffect(() => {
    const url =
      "https://raw.githubusercontent.com/Tahmid-islam/red-onion-restaurant/main/public/data.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const matchedId = data.filter((food) => food.id === foodId);
        setFoodDetails(matchedId);
      });
  }, [foodId]);

  return (
    <div>
      <h2>Hello{foodId}</h2>
      {foodDetails.map((food) => (
        <h2>{food.title}</h2>
      ))}
    </div>
  );
};

export default FoodDetails;
