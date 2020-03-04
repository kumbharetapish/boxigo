import React from "react";
import cardStyle from "./Card.module.css";
import Button from "../Button/Button";
const Card = props => {
  console.log(props.btnsty);

  return (
    <div className={cardStyle.cardWrapper}>
      <div className={cardStyle.cardTop}>
        <div className={cardStyle.homeWrapper}>
          <i className="fas fa-home"></i>
          <p> House {props.property} </p>
        </div>
        <div className={cardStyle.directionWrapper}>
          <div className={cardStyle.add}>
            <h2> {props.sourceCityName}</h2>
            <p> {props.toAdd}</p>
          </div>
          <Button
            sty={props.btnsty}
            id={props.id}
          />
          <div className={cardStyle.add}>
            <h2> {props.destinationCityName}</h2>
            <p> {props.fromAdd}</p>
          </div>
        </div>
        <div className={cardStyle.StatusWrapper}>
          <p> {props.status === null ? "In transit" : props.status}</p>
          <p> {}</p>
        </div>
      </div>
      <div className={cardStyle.cardBottom}>
        <p>
          <b>Order Date:</b> {props.OrderDate}
        </p>
      </div>
    </div>
  );
};

export default Card;
