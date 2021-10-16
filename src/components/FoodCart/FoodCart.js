import React from "react";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import img1 from "../../images/lunch/lunch1.png";
import img2 from "../../images/lunch/lunch2.png";
import img3 from "../../images/lunch/lunch3.png";
import img4 from "../../images/lunch/lunch4.png";
import img5 from "../../images/lunch/lunch5.png";
import "./FoodCart.css";

const FoodCart = ({ food }) => {
  const { title, img, price } = food;
  let [count, setCount] = useState(1);
  if (count < 1) {
    setCount(1);
  }
  let newPrice = (price * count).toFixed(2);

  const history = useHistory();

  const handleClick = () => {
    history.push("/cart");
  };

  return (
    <div>
      <div
        style={{ textAlign: "justify" }}
        className="container row mx-auto my-3 py-3"
      >
        <div className="col-12 col-lg-6">
          <div>
            <h2>{title}</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
              voluptates totam facilis repudiandae, ullam veniam, amet nihil
              odio quos tempore eveniet, quod mollitia doloribus fuga? Ad
              veritatis aspernatur numquam perspiciatis reiciendis enim,
              corrupti nisi ipsum ex dicta ipsa iste qui!
            </p>
            <h2>
              ${newPrice}
              <span className="shadow-sm ms-2 rounded-pill border">
                <button
                  className="btn"
                  onClick={() => setCount((count = count - 1))}
                >
                  <i className="fas fa-minus px-2"></i>
                </button>
                <span>{count}</span>
                <button
                  className="btn"
                  onClick={() => setCount((count = count + 1))}
                >
                  <i className="fas fa-plus px-2"></i>
                </button>
              </span>
            </h2>
            <button
              onClick={handleClick}
              className="btn btn-danger rounded-pill px-3"
            >
              <i className="fas fa-shopping-cart text-white pe-2"></i>Add
            </button>
          </div>
          <div className="mt-5 mx-auto">
            <Carousel className="carousel mb-4" role="listview">
              <Carousel.Item>
                <img
                  className="d-block w-100 img-fluid"
                  src={img1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-fluid"
                  src={img2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-fluid"
                  src={img3}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-fluid"
                  src={img4}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-fluid"
                  src={img5}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <img className="img-fluid" src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
