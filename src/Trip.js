import React from "react";

function Trip(){
    return(
        <div className="Trip">
            <h1 className="easy">Easy and fast</h1>
            <h1 className="Book">Book your next trip in 3 easy steps</h1>
            <div className="Tleft">
            <div className="steps">
                <img className="Timage" src="Group 11.png" />
                <div className="steps-c">
                    <h1 className="cdt">Choose Destination</h1>
                    <p className="pdt">Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Urna, tortor tempus. 
                    </p>
                </div>
            </div>
            <div className="steps">
                <img className="Timage" src="Group 11.png" />
                <div className="steps-c">
                    <h1 className="cdt">Make Payment</h1>
                    <p  className="pdt">Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Urna, tortor tempus. 
                    </p>
                </div>
            </div>
            <div className="steps">
                <img className="Timage" src="Group 12.png" />
                <div className="steps-c">
                    <h1 className="cdt">Reach Airport</h1>
                    <p  className="pdt">Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Urna, tortor tempus. 
                    </p>
                </div>
                </div>

                <div className="Tright">
                    <img className="greece" src="Rectangle 17.jpg" />
                    <h1 className="gtxt">Trip to Greece</h1>
                    <p className="date">14-29June</p>
                    <div className="leaf">
                        <img className="limg" src="leaf 1.png" />
                        <img className="limg" src="map 1.png" />
                        <img  className="limg"src="send 2.png" />


                    </div>
                    <div className="pplg">
                     <img className="limg" src="Group.png" />   
                    <p className="date">24 People are going</p>

                    </div>

                    <div className="progress">
                        <img className="dome" src="image 32.png" />
                        <div className="pbar">
                            <p className="date">Ongoing</p>
                            <p className="gtxt">Trip to Rome</p>
                            <div className="jj">
                                <p className="kk">40% 
                                    </p>
                                    <p className="gtxt"> 

                                    Completed</p></div>

                            <div className="fbar">
                                <div className="hbar"></div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    );
}

export default Trip;