import React, { Component } from "react";
import { Slide } from 'react-slideshow-image';
import './home.css';
import banner from './banner.png'
import Product from './Product';
import SmallProduct from './SmallProduct';
import { connect } from 'react-redux';

class Home extends Component {
    render() {
        const data = this.props.todoList;
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
                        {this.props.todoList.name}
                    </p>
                    <hr/>
                    <div className="hotProduct_ct">
                        <div className="hotProduct_item">
                            <div className="wrapper">
                                <Product info={data[2]} box="boxA big"></Product>
                                <Product info={data[5]} box="boxB big"></Product>
                                <Product info={data[3]} box="boxC small"></Product>
                                <Product info={data[4]} box="boxD small"></Product>
                                <Product info={data[1]} box="boxE small"></Product>
                                <Product info={data[11]} box="boxF small"></Product>
                            </div>
                            
                        </div>
                    </div>
                    <div className="hotProduct_ct2">
                        <div className="titleWrap">
                            <div>
                                <p className="blockTitle">
                                    Sản phẩm mua nhiều
                                </p>
                                <hr/>
                            </div>
                            <div>
                                <p className="blockTitle 2">
                                    Sản phẩm khuyến mại
                                </p>
                                <hr/>
                            </div>
                            
                        </div>
                        
                        <div className="wrapper2">
                        
                                    <div className="box1 small">
                                       <SmallProduct info={data[7]}></SmallProduct>
                                       <SmallProduct info={data[8]}></SmallProduct>
                                       <SmallProduct info={data[6]}></SmallProduct>
                                       <SmallProduct info={data[4]}></SmallProduct>
                                       <SmallProduct info={data[13]}></SmallProduct>
                                    </div>                                 
                                    <Product info={data[12]} box="box2 small"></Product>
                                    <Product info={data[14]} box="box3 small"></Product>
                                    <Product info={data[1]} box="box4 small"></Product>
                                    <Product info={data[7]} box="box5 small"></Product>
                                    <Product info={data[6]} box="box6 small"></Product>
                                    <Product info={data[3]} box="box7 small"></Product>
                        </div>
                            
                    </div>
                    <div className="banner">
                        <img src={banner}></img>
                    </div>
                    <div className="hotProduct_ct3">
                        <p className="blockTitle">
                            Sản phẩm mới
                        </p>
                        <hr/>
                        <div className="wrapper2">
                                <Product info={data[5]}  box="box0 small"></Product>
                                <Product info={data[7]} box="box1--edit small"></Product>
                                <Product info={data[5]} box="box2 small"></Product>
                                <Product info={data[4]} box="box3 small"></Product>
                                <Product info={data[2]} box="box4 small"></Product>
                                <Product info={data[11]} box="box5 small"></Product>
                                <Product info={data[10]} box="box6 small"></Product>
                                <Product info={data[3]} box="box7 small"></Product>
                        </div>
                            
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        todoList: state
    };
};

export default connect(mapStateToProps, null)(Home);
