import React from "react";
import happiness from '../images/unbox happiness.png'

export default function Content(){
    return(
        <div className="container">
         <div>
             <img src={happiness} alt="happiness" className="affect" />
         </div>
         <div className="text">
          <p>It is always a right reason to gift someone! We help you <br /> create a truly memorable gifting experience! What are <br /> you waiting for?</p>
         </div>
         <div className="buttonS">
             <button>Explore <span className="bi bi-arrow-right-short"></span></button>
             <button className="second2">Customize</button>
         </div>
        </div>
    )
}