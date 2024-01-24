import React, { useContext } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Item from "./Item";
import CartContext from "../../Store/cart-context";
import Title from "../UI/Title";
import Cart from "../Cart/Cart"

const productsArr = [
  {
    id:"p1",
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id:"p2",
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id:"p3",
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id:"p4",
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Store = (props) => {
  const cartCtx=useContext(CartContext);

  return (
    <>
      {cartCtx.isShow && <Cart/>}
      <Title>Music</Title>
      <Container key="item">
        <Row sm={3} className="ms-5 gap-5">
          {productsArr.map((item) => (
            <Col key={item.id} className="ms-5">
              <Item  item={item}  />
            </Col>
          ))}
        </Row>
        <div className="text-center ">
          <Button variant="secondary" className="text-info " onClick={cartCtx.toggleCart} size="lg">See the cart</Button>
        </div>
      </Container>
    </>
  );
};

export default Store;
