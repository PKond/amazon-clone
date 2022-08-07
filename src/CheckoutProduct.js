import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () =>{
        //remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />

      <div className="checkoutProduct__info">
        <div className="checkoutProduct__title">
          <p>{title}</p>
        </div>

        <div className="checkoutProduct__price">
          <p>
            <small>$</small>
            <strong>{price}</strong>
          </p>
        </div>

        <div className="checkoutProduct__rating">
          {" "}
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p><span className="checkoutProduct__star">⭐</span></p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
