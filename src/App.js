import React, { Component } from "react";
import Axios from "axios";
import Details from "./Containers/Details/Details";
import Home from "./Containers/Home/Home";
import Topbar from "./Components/Topbar/Topbar"
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responseArr: []
    };
  }

  componentDidMount() {
    Axios.get("http://boxigo.in/sampleAPI.php/:id")
      .then(response => {
        const responseArr = response.data.Customer_Estimate_Flow;

        this.setState({ responseArr: [...responseArr] });
        console.log(this.state.responseArr);
      })
      .catch(error => {
        console.log("error", error);
      });
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
         <Topbar/>
          <Switch>
            <Route
              path="/details/:Id"
              render={props => (
                <Details {...props} responseArr={this.state.responseArr} />
              )}
            />
            <Route
              exact
              path="/"
              render={props => (
                <Home {...props} responseArr={this.state.responseArr} />
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
