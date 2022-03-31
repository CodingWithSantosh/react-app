import React from "react";
import ServiceItem from "./ServiceItem";
import {servicesData}  from "../../api/data";

console.log("Hello")
console.log(servicesData)

const Services = () => {
  return (
    <>
      <div className="container-fluid pb-5 services">
        <div className="h3 text-light text-center py-3 serviceHead">
          Services
        </div>
        <div className="container-fluid d-flex justify-content-evenly flex-wrap">
          {servicesData.map((data) => {
            return (
              <ServiceItem
                key={data.id}
                title={data.title}
                paragraph={data.para}
                logo={data.logo}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
