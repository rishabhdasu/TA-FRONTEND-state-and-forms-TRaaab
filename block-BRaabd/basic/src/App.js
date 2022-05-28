import React from "react";
import "./style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "Basketball",
    };
    this.titles = ["Basketball", "Cricket", "Laptop", "Phone", "PubG", "Tiger"];
  }

  render() {
    return (
      <div className="container">
        <h1>Buttons</h1>
        <div className="buttons">
          {this.titles.map((title, i) => (
            <button
              onClick={() => {
                this.setState({ active: title });
              }}
              key={i}
            >
              {title}
            </button>
          ))}
        </div>
        <figure>
          <img
            src={`./assets/${this.state.active}.jpg`}
            alt={this.state.active}
          />
        </figure>
      </div>
    );
  }
}

export default App;
