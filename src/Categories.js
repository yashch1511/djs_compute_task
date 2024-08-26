import React from "react";
import Card from "./Card";

function Categories(){
    return(
    <div className="category">
        <div className="category-txt">
            <h2 className="txt-1">CATEGORY</h2>
            <h1 className="txt-2">WE OFFER BEST SERVICES</h1>
            
        </div>
        <div className="service">
           
            <Card
            
            img="satellite-dish.png"
            title="Calculated Weather"
            desc="Built Wicket longer admire do barton vanity itself do in it."
            />
            <Card 
            
            img="plane.png"
            title="Best Flights"
            customClass="plane"
            desc="Engrossed listening. Park gate sell they west hard for the."/>
            <Card
            img="Group 49.png"
            title="Local Events"
            desc="Barton vanity itself do in it. Preferd to men it engrossed listening. " />
            <Card
            img="image 25.png"
            title="Customization"
            desc="We deliver outsourced
aviation services for
military customers" />



            

        </div>
    </div>

    );
}

export default Categories;