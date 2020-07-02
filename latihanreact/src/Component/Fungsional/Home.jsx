import React from 'react'
import Blog from './Blog'
import Produk from '../Class/Produk';



const Home = () => {
   
    return <div>
   <Produk nama="Macbook Pro 2020" stock="10" harga="33000000" />
        <Produk nama="Macbook Pro 2018" stock="15" harga="43000000" />
        <Produk nama="Macbook Pro 2021" stock="30" harga="53000000" />
        <Produk nama="Macbook Pro 2022" stock="25" harga="23000000" />
        <Produk nama="Macbook Pro 2019" stock="50" harga="63000000" />
        <Produk nama="Macbook Pro 2023" stock="23" harga="73000000" />
</div>
}

export default Home;