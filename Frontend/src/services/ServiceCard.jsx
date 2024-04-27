import React from "react";
import "./service-card.css";

const ServiceCard = ({item}) => {

    const {imgUrl,title,desc} = item

    return <div className="service__item">
        <div className="service__item">
            <img src={imgUrl} />
        </div>
        <h5>{title}</h5>
        <p>{desc}</p>
    </div>;
}

export default ServiceCard;