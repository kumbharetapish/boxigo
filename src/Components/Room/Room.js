import React from "react";
import roomStyle from "./Room.module.css"
const Room = props => {
  return (
    <div className ={roomStyle.roomBox}>
      <p className={roomStyle.name}>{props.count}</p>
      <p>{props.name} </p>
    </div>
  );
};

export default Room;
