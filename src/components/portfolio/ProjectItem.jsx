import React from 'react'
import { Link } from "react-router-dom";

const ProjectItem = (props) => {
  return (
    <>
      <div className="col p-0 d-flex" key={props.id}>
             <Link to="/" className="card border-0 rounded-0 galleryCard m-2">
                 <img src={props.image} alt="" />
                 <div className="overlayBox d-flex justify-content-center align-items-center p-2 text-center">
                     <span className="h5 text-dark d-block fw-bold text-capitalize">{props.name}</span>
                 </div>
             </Link>
         </div>
    </>
  )
}

export default ProjectItem