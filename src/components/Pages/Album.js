import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import AlbumList from './AlbumList';
const dummy_album = [
    {
      date: "JUL16",
      place: "DETROIT, MI",
      address: "DTE ENERGY MUSIC THEATRE",
    },
    {
      date: "JUL19",
      place: "TORONTO,ON",
      address: "BUDWEISER STAGE",
    },
    {
      date: "JUL 22",
      place: "BRISTOW, VA",
      address: "JIGGY LUBE LIVE",
    },
    {
      date: "JUL 29",
      place: "PHOENIX, AZ",
      address: "AK-CHIN PAVILION",
    },
    {
      date: "AUG 2",
      place: "LAS VEGAS, NV",
      address: "T-MOBILE ARENA",
    },
    {
      date: "AUG 7",
      place: "CONCORD, CA",
      address: "CONCORD PAVILION",
    },
  ];
const Album = (props) => {
  return (
    
    <Container className='w-50 text-center'>
                <Table  >
                {dummy_album.map(item=><AlbumList key={item.date} item={item}/>)}
                </Table>      
    </Container>
  )
}

export default Album