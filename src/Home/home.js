import React, { Component } from "react";
import { Slide } from 'react-slideshow-image';
import './home.css';
import Product from './Product';

class Home extends Component {
    render() {
        const slideImages = [
            'images/slide1.png',
            'images/slide2.png',
            'images/slide3.png'
          ];
        const properties = {
            duration: 7000,
            transitionDuration: 500,
            infinite: true,
            indicators: true,
            arrows: true
        }
        return (
            <div className="home">
                <Slide {...properties}>
                    <div className="each-slide">
                        <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
                        </div>
                    </div>
                </Slide>
                <div className="hotProduct container">
                    <p className="blockTitle">
                        Sản phẩm nổi bật
                    </p>
                    <hr/>
                    <div className="hotProduct_ct">
                        <div className="hotProduct_item">
                            <div className="wrapper">
                                <Product box="boxA big"></Product>
                                <Product box="boxB big"></Product>
                                <Product box="boxC small"></Product>
                                <Product box="boxD small"></Product>
                                <Product box="boxE small"></Product>
                                <Product box="boxF small"></Product>
                            </div>
                            <div className="wrapper2">
                                <Product box="box1 small"></Product>
                                <Product box="box2 small"></Product>
                                <Product box="box3 small"></Product>
                                <Product box="box4 small"></Product>
                                <Product box="box5 small"></Product>
                                <Product box="box6 small"></Product>
                                <Product box="box7 small"></Product>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home
