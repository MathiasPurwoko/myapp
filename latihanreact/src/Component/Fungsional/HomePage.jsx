import React from 'react'
import { Jumbotron, Button } from 'reactstrap';
import { useContext } from 'react';
import { CartContext } from '../../CartContext';

function HomePage() {
    return (
        

        <div className="imageatas">
                    <img src="https://www.librinews.it/wp-content/uploads/2016/12/libri-cultura-generale-concorsi-da-leggere.jpg" alt="" />

            <Jumbotron>
              <h1 className="display-3">Mr. Books Store</h1>
                <p className="lead">Selamat Datang di Mr. Books Store.</p>
                <hr className="my-2" />
                <p>Hati-hati penipuan!!!.</p>
                <p className="lead">
                    <Button color="primary">Lihat Lainnya</Button>
                </p>
            </Jumbotron>
        </div>

    )
}

export default HomePage