import React, { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import CartContext from "../../Store/cart-context";

const CartList = (props) => {
  const cartCtx=useContext(CartContext);
  return (
    <tr className="align-middle">
      <td>
        <Image src={props.item.imageUrl} rounded style={{ width: "80px" }} />
        {props.item.title}
      </td>
      <td>₹{props.item.price}</td>
      <td>
        {props.item.quantity} 
        <Button variant="danger" onClick={cartCtx.removeItem.bind(null,props.item.id)} className="m-3">Remove</Button>
      </td>
    </tr>
  );
};

export default CartList;
