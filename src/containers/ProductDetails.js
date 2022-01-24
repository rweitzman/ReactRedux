import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log("id", id);

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (id && id !== "") fetchProductDetail(id);
    return () => {
      dispatch(removeSelectedProduct(id));
    };
  }, [id]);

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div style={{ marginTop: "20px" }}>
          <h1>....loading</h1>
        </div>
      ) : (
        <div
          className="ui placeholder segment center"
          style={{ marginTop: "40px"}} 
        >
          <div className="ui two column stackable center aligned grid" >
            <div className="middle aligned row">
              <div className="column 1p">
                <img
                  className="ui image"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  src={image}
                  alt={title}
                />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label" href="/">
                    $ {price}
                  </a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
