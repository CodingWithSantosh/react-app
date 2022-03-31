import React from "react";
import SkillItem from "./SkillItem";
import { skills } from "../../api/data";

const Skills = () => {
  return (
    <div className="container-fluid skills">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-5">
            <div className="h2 text-center text-light pt-5 pb-3">
              <span className="text-capitalize text-warning">Skills</span>
            </div>
            <div className="protText text-center text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              eos modi molestias architecto sunt animi
            </div>
          </div>
        </div>
        <div className="row skillCard shadow-sm py-4 mt-3">
          {skills.map((data) => {
            return (
              <SkillItem id={data.id} name={data.name} image={data.image} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
