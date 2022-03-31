import React from "react";
import { Link } from "react-router-dom";

const ServiceItem = (props) => {
  return (
    <>
      <div className="card shadow-sm px-2 serviceCard" key={props.key}>
        <div className="card-header bg-transparent border-0 text-light text-center pt-4">
          <div className="cardIcon">
            <i className={`fa-brands ${props.logo} fs-1 p-3 text-warning`}></i>
          </div>
          <h5 className="text-white-50">{props.title}</h5>
        </div>
        <div className="card-body">
          <p className="text-white-50">
           {props.paragraph}
          </p>
          <div className="h6 d-flex align-items-center py-1">
            <Link to="/" className="nav-link text-danger px-0">
              Read more
            </Link>
            <i className="fa-solid fa-arrow-right-long text-danger px-2"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceItem;
