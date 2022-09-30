import React from "react";
import '../assets/cardtestimonial.css'

function CardTestimonial(props){
  return(
    <div className="testimonial-container">
      <img 
        className="image-testimonial"
        src={require(`../images/testimonio-${props.images}.png`)}    
      />

      <div className="text-container">
        <p className="text-name-country">
          {props.name} in {props.country}
        </p>
        <p className="text-position-bns">
          {props.position} at {props.business}
        </p>
        <p className="testimonial">
          "{props.testimonial}"
        </p>
      </div>
    </div>
  );
}

export default CardTestimonial;