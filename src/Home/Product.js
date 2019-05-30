import React, { Component } from "react";
import './Product.css';
class Product extends Component {

render() {
    const data = this.props.info;
    var image,name,price;
    if(data!==undefined) {
         image=data.img;
         name=data.name;
         price=data.price;
    }

    return (
        <div className={`Product ${this.props.box}`}>
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
                    <span>{price}</span> 
                    <span>550 000 đ</span>
                </div>
            </div>
        </div>
    )
}
}
export default Product
