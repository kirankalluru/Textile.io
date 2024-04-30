import React from "react";
import "./card.css";
import data from '../data.json'

const Card = ({ image, description }) => {
  return (
    <div className="p-2">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={image}
          className="card-img-top"
          alt="img"
        />
        <div className="card-body">
          <h5 className="card-title">Card with stretched link</h5>
          <p className="card-text">
            {description}
          </p>
          <a href="/" className="btn btn-primary stretched-link">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

const MyListComponent = () => (
  <div className="d-flex justify-content-center d-sm-flex flex-wrap">
    {data.map((props, index) => (
      <Card key={index} image={props.image} description={props.description} />
    ))}
  </div>
);

export default MyListComponent;
