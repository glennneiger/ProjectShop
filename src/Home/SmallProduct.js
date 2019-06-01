import React, { Component } from "react";
import './SmallProduct.css';
import { Link } from "react-router-dom";
import { productDetail } from '../actions';
import { connect } from 'react-redux';

class SmallProduct extends Component {
    render() {
        const data = this.props.info;
        var image, name, price;
        if (data !== undefined) {
            image = data.img;
            name = data.name;
            price = data.price;
        }
        return (
            <Link to="/product-Detail" className={`SmallProduct`} onClick={() => this.props.productDetail(name, image, price)} title={name}>
                <div className="smallContainer">
                    <div className="smallContainer__img">
                        <img src={image} alt="ggg" />
                    </div>
                    <div className="smallContainer__text">
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
                            <span>{price}</span>
                        </div>
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
export default connect(null, mapDispatchToProps) (SmallProduct);
