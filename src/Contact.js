import React from "react";

function Contact(){
    return(
        <div className="Contact">
            <img src="Group 77.png" className="share" />
            <h1 className="Subscribe">Subscribe to get information, latest news and other
            interesting offers about Jadoo</h1>
            <div className="info">
                <img className="em" src="Rectangle 22.png" />
                <input type="email" className="col" required placeholder="Your email"></input>
                <button type="submit" className="info-btn">Subscribe</button>
            </div>
        </div>
    );
}

export default Contact;