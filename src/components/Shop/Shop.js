import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Row } from "react-bootstrap";
import useCategory from "../../hooks/userCategory";
import Food from "../Food/Food";
import "./Shop.css";

const Shop = () => {
  const [category, setCategory] = useCategory();
  const [foodItems, setFoodItems] = useState([]);
  useEffect(() => {
    const url =
      "https://raw.githubusercontent.com/Tahmid-islam/red-onion-restaurant/main/public/data.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const matchedCategory = data.filter(
          (meals) => meals.category.toUpperCase() === category.toUpperCase()
        );
        setFoodItems(matchedCategory);
      });
  }, [category]);

  return (
    <div>
      <div className="item d-flex justify-content-center my-3">
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link rounded-pill"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
              onClick={() => setCategory("Breakfast")}
            >
              Breakfast
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active rounded-pill"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
              onClick={() => setCategory("Lunch")}
            >
              Lunch
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link rounded-pill"
              id="pills-contact-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-contact"
              type="button"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
              onClick={() => setCategory("Dinner")}
            >
              Dinner
            </button>
          </li>
        </ul>
      </div>

      <Row xs={1} md={2} lg={3} className="g-4 container mx-auto">
        {foodItems.map((foodItem) => (
          <Food key={foodItem.id} foodItem={foodItem}></Food>
        ))}
      </Row>
    </div>
  );
};

export default Shop;
