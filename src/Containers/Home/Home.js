import React, { Component } from "react";
import Axios from "axios";
import Card from "../../Components/Card/Card";
export default class Home extends Component {
  render() {
    console.log(this.props.responseArr);
    const cards = this.props.responseArr.map((data, id) => {
      return (
        <Card
          id={id}
          key={data.estimate_id}
          property={data.property_size}
          sourceCityName={data.select_city}
          fromAdd={data.moving_from}
          destinationCityName={
            data.moving_from.split(",")[data.moving_from.split(",").length - 2]
          }
          toAdd={data.moving_to}
          status={data.custom_status}
          OrderDate={data.date_created.split(" ")[0]}
        />
      );
    });
    return <div className="App">{cards}</div>;
  }
}
