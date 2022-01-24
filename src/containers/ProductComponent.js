import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderedList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="four column wide" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card" style={{height: "480px"}}>
              <div className="image">
                <img style={{height: "300px"}}src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header" style={{fontSize: "1em"}}>{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <>{renderedList}</>;
};

export default ProductComponent;
