import React from "react";
function Card(props){
    return(
        <div className="Cardss">
        <div className="Card">
            <div className={'Card ${props.customClass}'}>
            <img className="cat-img "src={props.img}></img>
            <h1 className="cat-title">{props.title}</h1>
            <p className="cat-desc">{props.desc}</p>
</div>
        </div>
        </div>
    );
}

export default Card;