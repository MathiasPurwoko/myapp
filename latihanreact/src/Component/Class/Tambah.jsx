import React, { PureComponent } from 'react'
import axios from 'axios'
import { Container, Col, Row, Form, FormGroup, Alert, Label, Input, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

const api = 'http://localhost:3002'

class TambahComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            kode_buku: '',
            nama_buku: '',
            jenis_buku: '',
            harga: '',
            response: '',
            display:'none'

        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    Addproduk = () => {
        axios.post(api + '/tambahproduk', {
            kode_buku: this.state.kode_buku,
            nama_buku: this.state.nama_buku,
            jenis_buku: this.state.jenis_buku,
            harga: this.state.harga
        }).then(json =>{
            if(json.data.state === 200) {
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
                <Alert color="success" style={{display: this.state.display}}>
                    {this.state.response }

                </Alert>
                <Form className="form">
                    <Col>
                        <Label>Kode Buku</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="kode_buku" value={this.state.kode_buku} onChange={this.handleChange} placeholder="Masukan Kode Buku" />
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
                                    <Button type="button" onClick={this.Addproduk}>Submit</Button>
                                </Col>
                            </Row>
                        </FormGroup>
                    </Col>
                </Form>
            </Container>

        )
    }
}

export default TambahComp 