import React from "react";

const Contact = () => {
  return (
    <div className="container-fluid contact">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="h4 text-center text-light pt-5 pb-3">
              <span className="border-bottom border-3 text-uppercase text-warning">
                Contact Us
              </span>
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-4 d-flex justify-content-center">
            <div className="card bg-warning contactCard rounded-0 border-0 p-0 px-4 py-2">
              <div className="card-header p-0 bg-transparent border-0 px-3">
                <i class="fa-solid fa-phone fs-5 mx-2"></i>
                <span className="h6 px-2 fw-bold">Phone</span>
              </div>
              <div className="card-body p-0 px-4">
                <span>+91-8756580573</span>
              </div>
            </div>
          </div>
          <div className="col-4 d-flex justify-content-center">
            <div className="card bg-warning contactCard rounded-0 border-0 p-0 px-4 py-2">
              <div className="card-header p-0 bg-transparent border-0 px-3">
                <i class="fa-solid fa-envelope fs-5 mx-2"></i>
                <span className="h6 px-2 fw-bold">Email</span>
              </div>
              <div className="card-body p-0 px-4">
                <span>skambharti563@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="col-4 d-flex justify-content-center">
            <div className="card bg-warning contactCard rounded-0 border-0 p-0 px-4 py-2">
              <div className="card-header p-0 bg-transparent border-0 px-3">
                <i class="fa-solid fa-location-dot fs-5 mx-2"></i>
                <span className="h6 px-2 fw-bold">Location</span>
              </div>
              <div className="card-body p-0 px-4">
                <span>Jankipuram Lucknow UP</span>
              </div>
            </div>
          </div>
        </div>
        <div class="row row-cols-2 g-5 py-5">
          <div class="col">
            <input
              type="text"
              class="form-control p-3 text-light"
              placeholder="First name"
              aria-label="First name"
            />
          </div>
          <div class="col">
            <input
              type="text"
              class="form-control p-3 text-light"
              placeholder="Last name"
              aria-label="Last name"
            />
          </div>
          <div class="col">
            <input
              type="email"
              class="form-control p-3 text-light"
              placeholder="Email Address"
            />
          </div>
          <div class="col">
            <input
              type="tel"
              class="form-control p-3 text-light"
              placeholder="Phone"
            />
          </div>
          <div className="col-12">
          <textarea class="form-control p-3 text-light" placeholder="Drop massage" rows="8"></textarea>
          </div>
          <div className="col">
              <button className="buttonSend rounded-pill fs-5 fw-bold"><i class="fa-solid fa-paper-plane px-2"></i> Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
