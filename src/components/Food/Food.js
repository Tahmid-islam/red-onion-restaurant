import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Food.css";

const Food = ({ foodItem }) => {
  const { id, title, description, price, img } = foodItem;
  return (
    <div>
      <Col>
        <Card className="border-0 text-center card">
          <Card.Img variant="top" className="img-fluid" src={img} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>
              <h2>{price}</h2>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Food;
