import React from "react";
import "../style.css";

class Max extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      steps: 5,
      max: 200,
    };
  }

  increment = () => {
    let { counter, steps, max } = this.state;
    this.setState({
      counter: counter + steps > max ? counter : counter + steps,
    });
  };

  decrement = () => {
    let { counter, steps } = this.state;
    this.setState({
      counter: counter - steps,
    });
  };

  reset = () => {
    this.setState({
      counter: 0,
    });
  };

  render() {
    return (
      <div className="apps">
        <h2>Counter App with Steps and Max</h2>
        <h3>{this.state.counter}</h3>
        <div className="flex-48">
          <h4>Steps</h4>
          <div className="steps">
            {[5, 10, 15].map((value, i) => (
              <button
                className={
                  this.state.steps === value ? "active" : "secondary-btns"
                }
                onClick={() => this.setState({ steps: value })}
                key={i}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
        <div className="flex-48">
          <h4>Max</h4>
          <div className="steps">
            {[15, 100, 200].map((value, i) => (
              <button
                className={
                  this.state.max === value ? "active" : "secondary-btns"
                }
                onClick={() => this.setState({ max: value })}
                key={i}
              >
                {value}
              </button>
            ))}
          </div>
        </div>

        <div className="btns flex between">
          <button className="main-btns flex-20" onClick={this.increment}>
            Increment
          </button>
          <button className="main-btns flex-20" onClick={this.decrement}>
            Decrement
          </button>
          <button className="main-btns flex-20" onClick={this.reset}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Max;
