import React from "react";
import { Link } from "react-router-dom";
import ProjectItem from "./ProjectItem";
import { galleryData } from "../../api/data";

const Portfolio = () => {
  return (
    <div className="container-fluid portfolio">
      <div className="row d-flex justify-content-center">
        <div className="col-sm-5">
          <div className="h4 text-center text-light pt-5 pb-3">
            <span className="border-bottom border-3 text-uppercase text-warning">
              Portfolio Gallery
            </span>
          </div>
          <div className="protText text-center text-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            eos modi molestias architecto sunt animi, tenetur ipsam deleniti
            error magni?
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col d-flex justify-content-center my-5">
          <ul className="tabBtns d-flex flex-sm-nowrap flex-wrap">
            <li>
              <Link
                to="/"
                className="tabButton my-sm-0 my-2 shadow d-block rounded-pill text-center text-light text-decoration-none text-uppercase mx-2"
              >
                PHP
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="tabButton my-sm-0 my-2 shadow d-block rounded-pill text-center text-light text-decoration-none text-uppercase mx-2"
              >
                JAVASCRIPT
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="tabButton my-sm-0 my-2 shadow d-block rounded-pill text-center text-light text-decoration-none text-uppercase mx-2"
              >
                react
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="tabButton my-sm-0 my-2 shadow d-block rounded-pill text-center text-light text-decoration-none text-uppercase mx-2"
              >
                node
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="tabButton my-sm-0 my-2 shadow d-block rounded-pill text-center text-light text-decoration-none text-uppercase mx-2"
              >
                CSS
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="row row-cols-sm-4 row-cols-1 text-light d-flex justify-content-center">
          {galleryData.map((data) => {
            return (
              <ProjectItem id={data.id} name={data.name} image={data.image} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
