import React, { useEffect, useState } from "react";
import Title from "../UI/Title";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import axios from "axios";
const url = "https://auth-react-21ca9-default-rtdb.firebaseio.com/user.json";
const Contact = () => {
  const [userState,setUserState]= useState();
  const submitHandler=async (e)=>{
    e.preventDefault();
    const response=await axios.post(url,userState);
    const data= await axios.get(url);
  }
  useEffect(async()=>{
    const data=await axios.get(url);
    for(const key in data.data){
    }
  },[])
  return (
    <Container>
      <Row>
        <Col>
        <Title>Contact</Title>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name </Form.Label>
              <Form.Control type="text" onChange={(e)=>setUserState((state)=>{
                return {...state,name:e.target.value}
              })} placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" onChange={(e)=>setUserState((state)=>{
                return {...state,email:e.target.value} })} placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="Number" onChange={(e)=>setUserState((state)=>{
                return {...state,number:e.target.value} })} placeholder="Enter number" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
