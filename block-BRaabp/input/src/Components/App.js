import React from "react";
import datas from "../data";
import "../style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontSize: "16",
      inputText: "",
    };
  }
  handleChange = (event) => {
    this.setState({
      inputText: event.target.value,
    });
  };
  handleRange = (event) => {
    this.setState({
      fontSize: event.target.value,
    });
  };
  render() {
    let size = this.state.fontSize + "px";
    return (
      <div className="container">
        <h1>Font Tester</h1>
        <div className="input-holder flex justify-between">
          <input
            type="text"
            placeholder="Type something"
            value={this.state.inputText}
            onChange={this.handleChange}
          />

          <input
            type="range"
            value={this.state.fontSize}
            onChange={this.handleRange}
            min="16"
            max="100"
          />
        </div>
        <div className="wrapper flex justify-between wrap">
          {datas.map((data) => (
            <div className="boxes flex-33" key={data}>
              <h2 style={{ fontFamily: data }}>{data}</h2>
              <h3 style={{ fontFamily: data, fontSize: size }}>
                {this.state.inputText}
              </h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
