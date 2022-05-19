import React from "react";

const About = () => {
  return (
    <div className="container-fluid about">
      <div className="row py-5">
        <div className="col-sm-6 my-5 d-flex justify-content-center">
          <div className="card bg-transparent aboutImageCard">
            <img src="images\santosh_hand.png" alt="" />
          </div>
        </div>
        <div className="col-sm-5 my-5 d-flex flex-column justify-content-start aboutText">
          <div className="h2 text-warning fw-bold pb-3 text-sm-start text-center">
            <span className="border-bottom border-5">About Us</span>
          </div>
          <p className="para text-light mr-sm-5 p-sm-0 p-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae sapiente suscipit dicta fuga iusto est esse modi libero
            excepturi natus mollitia possimus blanditiis soluta
          </p>
          <p className="para text-light mr-sm-5 p-sm-0 p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            voluptatem inventore incidunt doloremque quae error consequuntur
            amet, ad veniam provident!
          </p>
          <ul className="p-sm-0 px-4 d-sm-flex flex-wrap justify-content-start aboutcontact">
            <li>
              <div className="details">
                <span className="text-warning d-block">name:</span>
                <span className="text-light d-block">Santosh kumar</span>
              </div>
            </li>
            <li>
              <div className="details">
                <span className="text-warning d-block">Email:</span>
                <span className="text-light d-block">
                  skambharti563@gmail.com
                </span>
              </div>
            </li>
            <li>
              <div className="details">
                <span className="text-warning d-block">Phone:</span>
                <span className="text-light d-block">
                  +91-8756580573
                </span>
              </div>
            </li>
            <li>
              <div className="details">
                <span className="text-warning d-block">LinkedIn:</span>
                <span className="text-light d-block">
                  devsantosh
                </span>
              </div>
            </li>
            <li>
              <div className="details">
                <span className="text-warning d-block">GitHub:</span>
                <span className="text-light d-block">
                  www.github.com/codingwithsantosh
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
