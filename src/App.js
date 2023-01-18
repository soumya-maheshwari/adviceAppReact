import "./App.css";
import axios from "axios";
import React, { Component } from "react";
class App extends Component {
  state = { advice: "" };
  componentDidMount() {
    this.fetching();
  }

  fetching = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { advice } = this.state;
    return (
      <div className="container">
        <div className="card">
          <h1>{advice}</h1>
        </div>
      </div>
    );
  }
}

export default App;
