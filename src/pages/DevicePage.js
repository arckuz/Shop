import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from '../assets/bigStar.png'
const DevicePage = () => {
    const  device = {id: 8, name: "желтая футболка", price: "2500", img: 'хз'}
    const description=[
        {id:1, tytle:"материал",description:"хлопок"},
        {id:2, tytle:"материал",description:"хлопок"},
        {id:3, tytle:"материал",description:"хлопок"},
        {id:4, tytle:"материал",description:"хлопок"},
    ]
    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                    </Row>
                    <div
                        className="d-flex justify-content-center align-items-center"
                        style={{background: `url(${bigStar}) no-repeat center center`, width:240, height: 240, backgroundSize: 'cover', fontSize:64}}
                    ></div>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>От: {device.price} руб.</h3>
                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Характеристики</h1>
                {description.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.tytle}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;