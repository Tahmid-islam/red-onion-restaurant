import React from "react";
import { Card, Col } from "react-bootstrap";
import { useHistory } from "react-router";
import "./Food.css";

const Food = ({ foodItem }) => {
  const { id, title, description, price, img } = foodItem;
  const history = useHistory();

  const handleOrder = (id) => {
    history.push(`/details/${id}`);
  };

  return (
    <div>
      <Col>
        <Card className="border-0 text-center card">
          <Card.Img variant="top" className="img-fluid" src={img} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text className="fs-3 fw-bold">{price}</Card.Text>
            <Card.Text>
              <button
                onClick={() => handleOrder(id)}
                className="btn btn-danger rounded-pill"
              >
                Order Now
              </button>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Food;
