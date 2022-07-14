import React from 'react';
import Navbar from './Navbar';
import Carousel from 'react-bootstrap/Carousel';
import SearchBar from './SearchBar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="homepage-carousel d-flex dark-mask">
                <Carousel controls={false} indicators={false} interval={3000}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src='https://res.cloudinary.com/eventsnearme/image/upload/v1657792247/website%20photos/AdobeStock_245398229_lhsxvh.jpg'
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src='https://res.cloudinary.com/eventsnearme/image/upload/v1657792246/website%20photos/AdobeStock_146945441_hniwxp.jpg'
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src='https://res.cloudinary.com/eventsnearme/image/upload/v1657792247/website%20photos/AdobeStock_258117678_fxd5zm.jpg'
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <SearchBar />
        </div>
    )
}

export default Home