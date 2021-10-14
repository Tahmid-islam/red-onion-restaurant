import React from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container pt-5">
      <div classNameName="text-center pt-5 my-5">
        <h1 className="mt-5 pt-5 fw-normal">
          Best food waiting for your belly
        </h1>
      </div>
      <InputGroup className="mb-3 py-4 w-25 mx-auto">
        <FormControl
          className="rounded-pill"
          placeholder="Search Food Items"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button
          variant="outline-secondary"
          className="rounded-pill bg-danger text-white px-4"
          id="button-addon2"
        >
          Search
        </Button>
      </InputGroup>
    </div>
  );
};

export default Banner;
