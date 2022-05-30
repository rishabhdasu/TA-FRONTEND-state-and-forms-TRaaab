import "../style.css";
import React from "react";
import data from "../data.json";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "",
    };
  }
  render() {
    let tags = data.reduce((acc, cv) => {
      if (!acc.includes(cv.category)) {
        acc.push(cv.category);
      }
      return acc;
    }, []);
    tags.unshift("all");
    let allProducts;

    if (this.state.activeTag === "all") {
      allProducts = data;
    } else {
      allProducts = data.filter((d) => this.state.activeTag === data.category);
    }
    return (
      <>
        <ul className="tags flex justify-between">
          {tags.map((tag, i) => (
            <li
              key={i}
              onClick={() => {
                this.setState = { active: tag };
                console.log(tag);
              }}
            >
              {tag.charAt(0).toUpperCase() + tag.slice(1)}
            </li>
          ))}
        </ul>
        <section className="flex justify-between wrap">
          <Menu allProducts={allProducts} />
        </section>
      </>
    );
  }
}

export default Menu;
