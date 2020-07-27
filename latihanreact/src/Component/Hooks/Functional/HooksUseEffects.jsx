import React, { useEffect, useState } from "react"
import { Container, Table, Button } from "reactstrap"
import axios from 'axios'
import Produk from "../../Class/Produk"

const api = 'http://localhost:3002'


function HooksUseEffects() {

    const [produk, setproduk] = useState([])
    useEffect(() => {
        console.log("Memanggil Use Effects")
        axios.get(api + '/tampilproduk').then(res => {
            setproduk(res.data.values)
        })
    }, [])

    return (
        <Container>
            <h2>Daftar Buku</h2>
            <hr />
            <Table className="table-bordered">
                <thead>
                    <tr>
                        <th>Kode Buku</th>
                        <th>Nama Buku</th>
                        <th>Jenis Buku</th>
                        <th>Harga</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {produk.map(produk =>
                        <tr key={produk.id_produk}>
                            <td>{produk.kode_buku}</td>
                            <td>{produk.nama_buku}</td>
                            <td>{produk.jenis_buku}</td>
                            <td>{produk.harga}</td>
                            <td>
                                <Button>Edit</Button>
                                <span> </span>
                                <Button color="danger">Hapus</Button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Container>
    )

}

export default HooksUseEffects 