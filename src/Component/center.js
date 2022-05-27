import React from "react";
import plenty from "../images/plenty options.png";
import shoe from "../images/Shoe.png";
import dress from "../images/dress.png";
import cake from "../images/cake.png";
import cloth from "../images/men clothes.png";
import teddy from "../images/teddy.png";
import flower from "../images/flowers.png";
import watch from "../images/watch.png";
import batman from "../images/lego Batman.png"

export default function Center(){
    return(
        <div>
           <div className="plenty">
               <img src={plenty} alt="plenty" />
           </div>
           <div className="btn-toolbar arrangebtn">
            <button className="btn">New joinee-kits</button>
            <button className="btn">Anniversary</button>
            <button className="btn">Occasion-based</button>
            <button className="btn">Festive</button>
            <button className="btn">General</button>
            <button className="btn">Eco-friendly</button>
           </div>
           <div className="para">
               <p>Umpteen options to choose from in all price range!</p>
           </div>
           <div className="cards" style={{display:'flex'}}>
            <div className="card cardd">
             <img className="card-image-top" src={shoe} alt="shoe" style={{width:'210px'}}/>
             <div className="card-body d-grid">
                 <button className="btn">Shop now</button>
             </div>
            </div>
            <div className="card carddshirt">
             <img className="card-image-top" src={dress} alt="dress" style={{width:'130px'}}/>
            </div>
            <div className="card carddcake">
             <img className="card-image-top" src={cake} alt="cake"/>
            </div>
            <div className="card cardcloth">
             <img className="card-image-top" src={cloth} alt="cloth"/>
            </div>
           </div>

           
           <span>
           <div className="cards" style={{display:'flex'}}>
            <div className="card cardteddy">
             <img className="card-image-top" src={teddy} alt="teddy" />
            </div>
            <div className="card cardflower">
             <img className="card-image-top" src={flower} alt="flower"/>
            </div>
            <div className="card cardwatch">
             <img className="card-image-top" src={watch} alt="watch"/>
            </div>
            <div className="card cardbatman">
             <img className="card-image-top" src={batman} alt="batman"/>
            </div>
           </div>
           </span>
           <div className="explo">
               <button className="btn-link explo">Explore more <span className="bi bi-arrow-right-short"></span></button>
           </div>
        </div>
    )
}