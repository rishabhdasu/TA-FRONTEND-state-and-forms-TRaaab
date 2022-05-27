import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "cricket",
    };
    this.titles = ["basketball", "cricket", "Laptop", "Phone", "PubG", "Tiger"];
  }

  render() {
    return (
      <>
        {this.titles.map((title, i) => (
          <button
            onClick={(e) => {
              console.log(title);
            }}
            key={i}
          >
            {title}
          </button>
        ))}
        <img src={`assets/${this.state.active}.jpg`} alt={this.state.active} />
      </>
    );
  }
}

export default App;
