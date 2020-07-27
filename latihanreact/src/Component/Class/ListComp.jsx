import React, { PureComponent } from 'react'
import axios from 'axios'
import qs from 'querystring'
import { Table, Button, Container, NavLink, Alert } from 'reactstrap'
import { Link } from 'react-router-dom'



const api = 'http://localhost:3002'

class LisComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            produk: [],
            response: '',
            display: 'none'
        }
    }

    componentDidMount() {
        axios.get(api + '/tampilproduk').then(res => {
            this.setState({
                produk: res.data.values
            })
        })
    }

    Deleteproduk = (id_produk) => {
        const { produk } = this.state
        const data = qs.stringify({
            id_produk: id_produk
        })

        axios.delete(api + '/hapusproduk',
            {
                data: data,
                headers: { 'Content-type': 'application/x-www-form-urlencoded' }
            }
        ).then(json => {
            if (json.data.status === 200) {
                this.setState({
                    response: json.data.values,
                    produk: produk.filter(produk => produk.id_produk !== id_produk),
                    display: 'block'
                })
                //this.props.history.push('/mahasiswa')
            } else {
                this.setState({
                    response: json.data.values,
                    display: 'block'
                })
                //this.props.history.push('/mahasiswa')

            }
        })
    }



    render() {
        return (
            <Container>
                <h2>Data Buku</h2>
                <Alert color="success" style={{ display: this.state.display }}>
                    {this.state.response}
                </Alert>
                <NavLink href="/produk/tambahproduk"><Button color="success">Tambah Buku</Button></NavLink>
                <hr />
                <Table className="table-border">
                    <thead>
                        <tr>
                            <th>Kode Buku</th>
                            <th>Nama Buku</th>
                            <th>Jenis Buku</th>
                            <th>Harga</th>
                        </tr>
                        <Table className="table-bordered"></Table>
                    </thead>
                    <tbody>
                        {this.state.produk.map(produk =>
                            <tr key={produk.id_produk}>
                                <td>{produk.kode_buku}</td>
                                <td>{produk.nama_buku}</td>
                                <td>{produk.jenis_buku}</td>
                                <td>{produk.harga}</td>
                                <td>
                                    <Link to=
                                        {
                                            {
                                                pathname: `/produk/edit`,
                                                state: {
                                                    id_produk: produk.id_produk,
                                                    kode_buku: produk.kode_buku,
                                                    nama_buku: produk.nama_buku,
                                                    jenis_buku: produk.jenis_buku,
                                                    harga: produk.harga
                                                }
                                            }
                                        }>
                                        <Button>Edit</Button>
                                    </Link>
                                    <span> </span>
                                    <Button onClick={() => this.Deleteproduk(produk.id_produk)} color="danger">Hapus</Button>
                                </td>
                            </tr>

                        )}
                    </tbody>
                </Table>
            </Container>
        )
    }
}

export default LisComp 