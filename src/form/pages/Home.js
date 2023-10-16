import React, { Component } from 'react';
import './style/StyleHome.css'
import { Link } from 'react-router-dom';
class Home extends Component {
    render() {
        return (

            <div className='home-body'>
                    <h1>Welcome to the world of timeless elegance, where every second matters.</h1>
                    <p>Welcome to our world of hand watches,
                    where time meets timeless elegance. We believe in 
                    the art of craftsmanship and the allure 
                    of precision. Every hand watch in our collection is a 
                    testament to our dedication to curate the most elegant 
                    timepieces. Each watch is more than just a timekeeping device;
                    it's a symbol of sophistication and the embodiment of timeless
                    style. We take great pride in presenting you with the finest 
                    selection of hand watches, designed to elevate your moments and make
                    a statement about your appreciation for the finer things in life.
                    </p>
                    <Link to="/seemore" className='link-seemore'>See More</Link>
                
            </div>
        );
    }
}
export default Home;