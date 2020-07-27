import React, { PureComponent } from 'react'
import axios from 'axios'
import qs from 'querystring'
import { Link } from 'react-router-dom'
import { Container, Col, Row, Form, FormGroup, Alert, Label, Input, Button } from 'reactstrap'

const api = "http://localhost:3002"

class EditComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            id_produk: this.props.location.state.id_produk,
            kode_buku: this.props.location.state.kode_buku,
            nama_buku: this.props.location.state.nama_buku,
            jenis_buku: this.props.location.state.jenis_buku,
            harga: this.props.location.state.harga,
            response: '',
            display: 'none'
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

ubahproduk = (id_produk) => {
    const data = qs.stringify({
        id_produk: id_produk,
        kode_buku: this.state.kode_buku,
        nama_buku: this.state.nama_buku,
        jenis_buku: this.state.jenis_buku,
        harga: this.state.harga
    });

    axios.put(api+ '/ubahproduk', data)
    .then(json => {
        if(json === 200){
            this.setState({
                response: json.data.values,
                display: 'block'
            })
        }else {
            this.setState({
                response: json.data.values,
                display: 'block'
            })
        }
    })
}

    render() {
        return (
            <Container>
                <h4>Form Tambah Produk</h4>
                <Alert color="success" style={{ display: this.state.display }}>
                    {this.state.response}

                </Alert>
                <Form className="form">
                    <Col>
                        <Label>kode Buku</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="kode_buku" value={this.state.kode_buku} onChange={this.handleChange} placeholder="Masukan Kode" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>Nama Buku</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="nama_buku" value={this.state.nama_buku} onChange={this.handleChange} placeholder="Masukan Nama Buku" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>Jenis Buku</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="jenis_buku" value={this.state.jenis_buku} onChange={this.handleChange} placeholder="Masukan Jenis Buku" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>Harga</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="harga" value={this.state.harga} onChange={this.handleChange} placeholder="Masukan Harga" />
                                </Col>
                            </Row>
                        </FormGroup>

                        <FormGroup>
                            <Row>
                                <Col>
                                    <Button type="button" onClick={()=>this.ubahproduk(this.state.id_produk)}>Update</Button>
                                </Col>
                            </Row>
                        </FormGroup>
                    </Col>
                </Form>
            </Container>


        )
    }
}

export default EditComp 