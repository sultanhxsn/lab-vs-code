import React from "react";
import { useParams } from "react-router-dom";
import '../Styles/ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  return <h1>Product Detail for Product ID: {id}</h1>;
}

export default ProductDetail;
