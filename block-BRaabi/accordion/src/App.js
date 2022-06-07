import data from "./data";
import React from "react";
import "./style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: null,
    };
  }

  render() {
    return (
      <section>
        {data.map((question, i) => (
          <article key={i} className={this.state.active === i ? "active" : ""}>
            <div className="question">
              <h2>{question.Q}</h2>
              <i
                onClick={() => {
                  this.setState({
                    active: this.state.active === i ? null : i,
                  });
                }}
                className={
                  this.state.active === i
                    ? "fas fa-hand-point-up"
                    : "fas fa-hand-point-down"
                }
              ></i>
            </div>
            <p className={this.state.active === i ? "visible" : "none"}>
              {question.A}
            </p>
          </article>
        ))}
      </section>
    );
  }
}

export default App;
