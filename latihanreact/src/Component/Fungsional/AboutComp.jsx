import React, { useContext } from 'react'
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';
import CardComp from './CardComp';
import { CartContext } from '../../CartContext';


function AboutComp() {
    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">Tentang Kami!</h1>
                <p className="lead">Mr. Books Store adalah sebuah toko buku yang berbasis website, yang dibuat untuk mempermudah pembelian buku di masa pandemi covid-19 ini.</p>
                <hr className="my-2" />
                <p>Mempermudah pembelian dan tidak perlu repot ke toko buku.</p>
                <p className="lead">
                    <Button color="primary">Lihat Lainnya</Button>
                </p>
            </Jumbotron>
            <Container>
                <Row>
                    <Col><CardComp id="1" judul="Novel Terbaru" tanggal="28/06/2020"/></Col>
                    <Col><CardComp id="2" judul="Komik Naruto Di Tunda" tanggal="29/06/2020"/></Col>
                    <Col><CardComp id="3" judul="Cara Menghitung Cepat" tanggal="30/06/2020"/></Col>
                </Row>
            </Container>
        </div>
    )

}

export default AboutComp 