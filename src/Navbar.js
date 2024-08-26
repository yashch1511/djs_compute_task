import React from "react";

function Navbar(){

    return(
    <div className="Navbar">

<img className= "Decore"src="Decore.png"></img>

        <div className="Jadoo">
            <img className="logo" src="Jadoo.png"></img>
        </div>
        <div className="features">
            <a href="" className="each">Destination</a>
            <a href="" className="each">Hotels</a>
            <a href="" className="each">Flights</a>
            <a href="" className="each">Booking</a>
            <a href="" className="each">Login</a>
            <button id="btn" className="each">Sign up</button>
            <select id="drop" className="each">
                <option >EN</option>
                <option >हिन्दी</option>
                <option >FR</option>



            </select>

        </div>
        

    </div>
    );
}

export default Navbar;