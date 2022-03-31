import React from "react";
import { Link } from "react-router-dom";
import Services from "./Services";

const Home = () => {
  return (
    <>
      <div className="container-fluid home">
        <div className="container pt-5">
          <div className="row pt-5">
            <div className="col-7">
              <div className="card textCard text-light border-0 bg-transparent">
                <div className="h1">
                  <span className="name">This is santosh kumar</span> <br />
                  <span className="text-light fw-bold">I'm </span>
                  <span className="h1 text-warning fw-bold">
                    fullstack Developer
                  </span>
                </div>
                <p className="text-white">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Atque distinctio, magnam libero quaerat quas ducimus
                  temporibus eius quae dolorum perferendis quibusdam at
                  voluptates aperiam. Officia doloribus aperiam repellendus
                  recusandae, sequi aut, hic laudantium voluptates cumque optio
                  id culpa debitis cum!
                </p>
              </div>
              <div className="d-flex my-5">
                <div className="card bg-transparent border-0">
                  <div className="contactPill shadow bg-danger rounded-pill text-center">
                    <Link
                      to="/"
                      className="text-decoration-none text-white fs-6 fw-bold"
                    >
                      GitHub
                    </Link>
                  </div>
                </div>
                <div className="card bg-transparent border-0 mx-5">
                  <div className="contactPill bg-danger shadow rounded-pill border-0 text-center">
                    <Link
                      to="/"
                      className="text-decoration-none text-white fs-6 fw-bold"
                    >
                      YouTube
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-5 d-flex flex-column align-items-center">
              <div className="card shadow imageCard bg-transparent">
                <img
                  src="images\santoshVersion.png"
                  className="homeImage"
                  alt=""
                />
              </div>
              <div className="card bg-transparent border-0">
                <ul className="socialLinks px-0 d-flex justify-content-center my-4">
                  <li>
                    <Link to="/">
                      <i class="fa-brands fa-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i class="fa-brands fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i class="fa-brands fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i class="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i class="fa-brands fa-whatsapp"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Services/>
    </>
  );
};

export default Home;
