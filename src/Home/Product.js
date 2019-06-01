import React, { Component } from "react";
import './Product.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { productDetail } from '../actions';

class Product extends Component {

    render() {
        const data = this.props.info;
        var image, name, price;
        if (data !== undefined) {
            image = data.img;
            name = data.name;
            price = data.price;
        }

        return (
            <Link to="/product-Detail" className={`Product ${this.props.box}`} onClick={() => this.props.productDetail(name, image, price)} title={name}>
                <div className="Product__img">
                    <img src={image} alt="df"></img>
                </div>
                <div className="Product__text">
                    <div>
                        <span> {name}
                        </span>
                    </div>
                    <div>
                        <span>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </span>
                    </div>
                    <div>
                        <span>{price} đ</span>
                        <span>{parseInt(price) + 50000} đ</span>
                    </div>
                </div>
            </Link>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        productDetail: (name, img, price) => dispatch(productDetail(name, img, price)),
    }
}
export default connect(null, mapDispatchToProps) (Product);
