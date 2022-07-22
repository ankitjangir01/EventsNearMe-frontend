import React from 'react';
import Navbar from './Navbar';
import Carousel from 'react-bootstrap/Carousel';
import SearchBar from './SearchBar';
import PopularEvents from './PopularEvents';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="homepage-carousel d-none d-lg-block dark-mask">
                <Carousel controls={false} indicators={false} interval={3000}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src='https://res.cloudinary.com/eventsnearme/image/upload/v1657779750/website%20photos/auditorium-2584269_1920_jiuwc0.jpg'
                            alt="First slide"
                            />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src='https://res.cloudinary.com/eventsnearme/image/upload/v1657779751/website%20photos/violin-2606655_1920_xkoosl.jpg'
                            alt="Second slide"
                            />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src='https://res.cloudinary.com/eventsnearme/image/upload/v1658518879/website%20photos/Honeyview_AdobeStock_121877801_yypjs1.jpg'
                            alt="Third slide"
                            />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src='https://res.cloudinary.com/eventsnearme/image/upload/v1657896992/website%20photos/firework-2030924_1920_2_w7750k.jpg'
                            alt="Forth slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='vh-100 d-flex justify-content-center align-items-center'>
                <div className='d-flex-col justify-content-center align-items-center text-align-center'>
                    <h1 style={{'font-size': '40px', 'color': 'white'}}><strong>find sports, cultural events, seminars and more...</strong></h1>
                    <h5 style={{'color': 'white'}} className='text-center'>enter your city name below and find<br/>best event near you</h5>
                    <SearchBar />
                </div>
            </div>
            <div className="popular-events-homepage d-flex">
                <PopularEvents />
            </div>
            <Footer />
        </div>
    )
}

export default Home