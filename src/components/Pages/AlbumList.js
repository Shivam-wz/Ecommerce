import React from "react";
import { Button } from "react-bootstrap";

const AlbumList = (props) => {
  return (
    <>
      <tr >
        <td>{props.item.date}</td>
        <td>{props.item.place}</td>
        <td>{props.item.address}</td>
        <Button className="my-1 px-5" variant="info">Buy Tickets</Button>
      </tr>
    </>
  );
};

export default AlbumList;
