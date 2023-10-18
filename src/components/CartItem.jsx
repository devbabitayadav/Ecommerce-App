import React from "react";
import { useDispatch } from "react-redux";
import { remove,plus } from "../features/cart/cartSlice";
import { toast } from "react-toastify";


const CartItem = ({ Item }) => {

  const dispatch = useDispatch();

  const { count } = CartItem;

  const handleRemove = (id) => {
    dispatch(remove(id));
    toast.error("Item Removed" ,{
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

  if (! Item ||  Item.length === 0) {
    return (
      <h1>
        No items in your <span>cart </span>...
      </h1>
    );
  }

  return (
    <div className="cart-item">
      <img src={Item.image} alt="" />
      <span>
        <h1>{Item.title}</h1>
        <h3>Rate : ${Item.price}</h3>
        <h3>Qty : <button className="btn1"  onClick={() => {
              if (count > 1)
                dispatch(
                  plus({
                    ...CartItem,
                    count: count - 1,
                  })
                );
            }}>- </button> 1 <button className="btn1"  onClick={() =>
              dispatch(
                plus({
                  ...CartItem,
                  count: count + 1,
                })
              )
            }>+ </button></h3>
      </span>
      <button className="remove-btn" onClick={() => handleRemove(Item.id)}>
        Remove Item <i class="fa fa-star-half-o" aria-hidden="true"></i>

      </button>
    </div>
  );
};

export default CartItem;
