import React from "react";
import datas from "../data.json";
import "../components/app.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="flex justify-between wrap container">
        {datas.map((data) => (
          <article className="flex-48">
            <img src={data.Images} alt={data.Title}></img>
            <h2>{data.Title}</h2>
            <span>{data.Released}</span>
            <button>More Info...</button>
          </article>
        ))}
      </section>
    );
  }
}

export default App;
