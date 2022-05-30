import "../style.css";

function Menu(props) {
  return (
    <>
      {props.allProducts.map((prod, i) => (
        <div className="flex flex-48 center">
          <figure className="flex-48">
            <img src={prod.img} alt={prod.title}></img>
          </figure>
          <article className="flex-48">
            <div>
              <h2>
                {prod.title.charAt(0).toUpperCase() + prod.title.slice(1)}
              </h2>
              <h3>${prod.price}</h3>
            </div>
            <p>{prod.desc}</p>
          </article>
        </div>
      ))}
    </>
  );
}

export default Menu;
