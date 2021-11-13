import React from 'react';
import { Button } from 'react-bootstrap';
import news1 from '../../../images/news/news-1.jpg'
import news2 from '../../../images/news/news-2.jpg'
import news3 from '../../../images/news/news-3.jpg'
import './News.css';
import Zoom from 'react-reveal/Zoom';

const News = () => {
    return (
        <div className="container my-5 pt-5">
            <Zoom top cascade>
                <h1 style={{ color: '#163336' }} className="fw-bold mt-5 py-5">Our Latest News</h1>
            </Zoom>

            <div className="row">

                <div className="col-md-4 col-sm-12">
                    <div className="news-img">
                        <img className="img-fluid" src={news1} alt="" />
                    </div>
                    <div className="pt-3">
                        <h6 style={{ color: '#163336' }} className="text-start">25, August 2021 | 1 Comments</h6>

                        <h4 style={{ color: '#163336' }} className="fw-bold pt-2 text-start">Cycling through The Night</h4>

                        <p className="text-start text-muted">Always back your bike into the curn and sit where you can seet it. The sound of the throttle makes me fall in love with our bike.</p>

                        <div className="text-start mb-3">
                            <Button className="text-white" style={{ backgroundColor: '#163336' }}> Read More</Button>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-sm-12">
                    <div className="news-img">
                        <img className="img-fluid" src={news2} alt="" />
                    </div>
                    <div className="pt-3">
                        <h6 style={{ color: '#163336' }} className="text-start">10, September 2021 | 4 Comments</h6>

                        <h4 style={{ color: '#163336' }} className="fw-bold pt-2 text-start">Change Gear on a Bicycle</h4>

                        <p className="text-start text-muted">Ride it like a pro it's not just riding The best rides happen on two wheel. It will lead your way. Ride and live today.</p>

                        <div className="text-start mb-3">
                            <Button className="text-white" style={{ backgroundColor: '#163336' }}> Read More</Button>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-sm-12">
                    <div className="news-img">
                        <img className="img-fluid" src={news3} alt="" />
                    </div>
                    <div className="pt-3">
                        <h6 style={{ color: '#163336' }} className="text-start">18, October 2021 | 3 Comments</h6>

                        <h4 style={{ color: '#163336' }} className="fw-bold pt-2 text-start">Gear Cycle with Disk Brake</h4>

                        <p className="text-start text-muted">You can't be happier, if you won't ride your bike. A long ride in your bike will clear your mind. And the cycle can sing on the streets of a city.</p>

                        <div className="text-start mb-3">
                            <Button className="text-white" style={{ backgroundColor: '#163336' }}> Read More</Button>
                        </div>
                    </div>
                </div>


            </div>
        </div >
    );
};

export default News;