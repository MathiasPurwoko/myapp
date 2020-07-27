import React, { Component } from 'react';
import {
    Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { useContext } from 'react';
import { CartContext } from '../../../CartContext';

function RowProduct () {

    const { value, setValue } = useContext(CartContext)

    return (
        <Col>
            <Card>
                <CardImg top width="100%" src="https://lh4.googleusercontent.com/TEtWkAcMTlwJcdU57zVk2Lf6UFoisBPSartImxyUptK6FHKbI6ZObAzSPl8ZI0aoVskpqs8b3r49LYRS0b2XHH8pVm_Fe6iMTPCNPyCUIb2-tOfy9Sg96NTDEf9ix2X3sw=s412" alt="Card image cap" />
                <CardBody>
                    <CardTitle> Naruto Shippuden </CardTitle>
                    <CardSubtitle>Rp. 50.000</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button onClick={() => setValue(value + 1)}>Tambahkan Keranjang</Button>
                </CardBody>
            </Card>
            <Card>
                <CardImg top width="100%" src="https://ecs7.tokopedia.net/img/cache/700/product-1/2018/5/25/1076932/1076932_fdc27a91-508c-49a5-a26c-cffa0b273fb8.jpg" alt="Card image cap" />
                <CardBody>
                    <CardTitle> Naruto Shippuden </CardTitle>
                    <CardSubtitle>Rp. 50.000</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button onClick={() => setValue(value + 1)}>Tambahkan Keranjang</Button>
                </CardBody>
            </Card>
        </Col>
    );
}


export default RowProduct;