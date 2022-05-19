import React from "react";

const SkillItem = (props) => {
  return (
    <>
      <div className="col-sm-2 my-2" key={props.id}>
        <div className="card border-0 shadow bg-dark techCard d-flex align-items-center p-3">
          <div className="imgBox">
            <img src={props.image} alt="" />
          </div>
          <div className="card-body pb-0">
            <div className="h6 text-uppercase text-light">{props.name}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillItem;
