import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import FoodCart from "../FoodCart/FoodCart";

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
      {foodDetails.map((food) => (
        <FoodCart key={food.id} food={food}></FoodCart>
      ))}
    </div>
  );
};

export default FoodDetails;
