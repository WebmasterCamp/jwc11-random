import React, { Component } from "react";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClass: 0,
      team: 0
    };
  }
  animate() {
    this.setState({ isClass: 1 });
    const rand = Math.floor(Math.random() * 7) + 1; 
    this.setState({team: rand})
    // setTimeout(() => {
    //   console.log("eath");
    //   this.setState({ isClass: 1 });
    // }, 4000);
  }
  render() {
    return (
      <div id="App">
        <img
          src="./coin.png"
          alt=""
          className={(this.state.isClass ? "coin7" : "") + " start"}
        />
        <img className="bg" src="./RANDOM.png" alt="" />
        <button className="btn" onClick={() => this.animate()} />
      <div>{this.state.team}</div>
        
      </div>
    );
  }
}

export default App;
