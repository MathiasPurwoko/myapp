import React from 'react'
import Blog from './Blog'

const Home = () => {
   
    return <div>
    <Blog
        tanggal="21 Juni 2020"
        judul="Teknologi Blockchain"
        summary="Generate Lorem Ipsum placeholder text for use in your graphic."
    />
    <Blog
        tanggal="22 Juni 2020"
        judul="Teknologi Internet of Things"
        summary="Generate Lorem Ipsum placeholder text for use in your graphic."
    />
    <Blog
        tanggal="23 Juni 2020"
        judul="Desain Patter Laravel"
        summary="Generate Lorem Ipsum placeholder text for use in your graphic."
    />

</div>
}

export default Home;