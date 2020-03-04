import React, { Component } from "react";
import { Link } from "react-router-dom";
import BtnSty from "./Button.module.css";
export class Button extends Component {
  render() {
    return (
      <Link
        className={
          this.props.sty === "buttonNone"
            ? BtnSty.buttonNone
            : BtnSty.buttonShow
        }
        to={`/details/${this.props.id}`}
      >
        {" "}
        View More Details{" "}
      </Link>
    );
  }
}

export default Button;
