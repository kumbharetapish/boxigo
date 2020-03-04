import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "../../Components/Card/Card";
import Room from "../../Components/Room/Room";
import DetailsStyle from "./Details.module.css";
class Details extends Component {
  render() {
    localStorage.setItem(
      "res",
      JSON.stringify({ ...this.props.responseArr[this.props.match.params.Id] })
    );
    const res =
      localStorage.getItem("res") === null
        ? { ...this.props.responseArr[this.props.match.params.Id] }
        : JSON.parse(localStorage.getItem("res"));

    // localStorage.setItem("res", JSON.stringify(res));
    const card = (
      <Card
        btnsty={"buttonNone"}
        key={res.estimate_id}
        property={res.property_size}
        sourceCityName={res.select_city}
        fromAdd={res.moving_from}
        destinationCityName={
          res.moving_from.split(",")[res.moving_from.split(",").length - 2]
        }
        toAdd={res.moving_to}
        status={res.custom_status}
        OrderDate={res.date_created.split(" ")[0]}
      />
    );

    const liveRoom = (
      <div className={DetailsStyle.rooms}>
        <h2>living Room</h2>
        <div className={DetailsStyle.roomsWrapper}>
          <Room
            name={"center table"}
            count={res.items.rooms.living_room.center_table}
          />
          <Room
            name={"computer table"}
            count={res.items.rooms.living_room.computer_table}
          />
          <Room
            name={"foldable chair"}
            count={res.items.rooms.living_room.foldable_chair}
          />
          <Room
            name={"home theater"}
            count={res.items.rooms.living_room.home_theater}
          />
          <Room
            name={"non foldable chair"}
            count={res.items.rooms.living_room.non_foldable_chair}
          />
        </div>
      </div>
    );

    const bedRoom = (
      <div className={DetailsStyle.rooms}>
        <h2>Beb Room</h2>
        <div className={DetailsStyle.roomsWrapper}>
          <Room
            name={"center table"}
            count={res.items.rooms.bed_room.center_table}
          />
          <Room
            name={"computer table"}
            count={res.items.rooms.bed_room.computer_table}
          />
          <Room
            name={"foldable chair"}
            count={res.items.rooms.bed_room.foldable_chair}
          />
          <Room
            name={"home theater"}
            count={res.items.rooms.bed_room.home_theater}
          />
          <Room
            name={"non foldable chair"}
            count={res.items.rooms.bed_room.non_foldable_chair}
          />
        </div>
      </div>
    );
    const kitchen = (
      <div className={DetailsStyle.rooms}>
        <h2>kitchen</h2>
        <div className={DetailsStyle.roomsWrapper}>
          <Room
            name={"center table"}
            count={res.items.rooms.kitchen.center_table}
          />
          <Room
            name={"computer table"}
            count={res.items.rooms.kitchen.computer_table}
          />
          <Room
            name={"foldable chair"}
            count={res.items.rooms.kitchen.foldable_chair}
          />
          <Room
            name={"home theater"}
            count={res.items.rooms.kitchen.home_theater}
          />
          <Room
            name={"non foldable chair"}
            count={res.items.rooms.kitchen.non_foldable_chair}
          />
        </div>
      </div>
    );
    const others = (
      <div className={DetailsStyle.rooms}>
        <h2>Other</h2>
        <div className={DetailsStyle.roomsWrapper}>
          <Room
            name={"center table"}
            count={res.items.rooms.others.center_table}
          />
          <Room
            name={"computer table"}
            count={res.items.rooms.others.computer_table}
          />
          <Room
            name={"foldable chair"}
            count={res.items.rooms.others.foldable_chair}
          />
          <Room
            name={"home theater"}
            count={res.items.rooms.others.home_theater}
          />
          <Room
            name={"non foldable chair"}
            count={res.items.rooms.others.non_foldable_chair}
          />
        </div>
      </div>
    );
    return (
      <div className="App">
        <h2> Order Details </h2>
        {card}
        <div className={DetailsStyle.roomsSectionWrapper}>
          {liveRoom}
          {bedRoom}
          {kitchen}
          {others}
        </div>
        <div className={DetailsStyle.btnWrapper}>
          <Link className={DetailsStyle.backBtn} to="/">
            {" Back to Home "}
          </Link>
        </div>
      </div>
    );
  }
}
export default Details;
