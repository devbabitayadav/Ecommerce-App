import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../features/cart/cartSlice";
import { toast } from "react-toastify";


const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(add(product));
    toast.success("item added to cart" , {
      position: "bottom-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  };


  return (
    <div className="product">
      <img src={product.image} alt="" />
      <h1>{product.title} </h1>
   
      <span>
        <h3>Price : {product.price}</h3>
        <button className="add_cart" onClick={() => handleAdd(product)}>
          Add to cart
     
        </button>
        
      </span>

   
      
    </div>
  );
};

export default ProductCard;
