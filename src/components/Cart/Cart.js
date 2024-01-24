import React, { useContext } from "react";
import { Button, Table } from "react-bootstrap";
import CartList from "./CartList";
import CartContext from "../../Store/cart-context";


const Cart = (props) => {
  const cartCtx=useContext(CartContext);
  return (
    <div className="z-1 d-block position-fixed h-100">
      <div className="position-fixed my-5 bg-white top-0 h-100 end-0">
        <div className="text-end">
          <Button onClick={cartCtx.toggleCart}>X</Button>
        </div>
        <h2 className="text-center">Cart</h2>
        <Table className="">
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {cartCtx.items.map((item, idx) => (
              <CartList key={idx} item={item} />
            ))}
          </tbody>
        </Table>
        <div className="text-center ">
          <Button variant="info" onClick={cartCtx.purchase}  size='lg'  >Purchase</Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
