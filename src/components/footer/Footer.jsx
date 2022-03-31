import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="row d-flex justify-content-center align-items-center pt-4">
        <div className="col-4">
          <div class="d-flex">
            <input
              type="email"
              class="form-control text-light"
              placeholder="name@example.com"
            />
            <div className="tabButton border-0 bg-dark d-block text-center text-light text-decoration-none text-uppercase mx-2">Send</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
