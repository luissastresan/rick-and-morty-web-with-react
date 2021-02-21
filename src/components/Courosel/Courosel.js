import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import './Courosel.scss'

const Courosel = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <div className="container-courosel"></div>
                    <Carousel.Caption>
                        <h3 className="info-courosel">Episodes</h3>
                    </Carousel.Caption >
                </Carousel.Item>
                <Carousel.Item>
                    <div className="container-courosel"></div>
                    <Carousel.Caption>
                        <h3 className="info-courosel">Characters</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="container-courosel"></div>
                    <Carousel.Caption>
                        <h3 className="info-courosel">Locations</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default Courosel