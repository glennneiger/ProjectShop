import React, { Component } from "react";
import './Product.css';
import image1 from './spx2-4.png'
class Product extends Component {
render() {
    return (
        <div className={`Product ${this.props.box}`}>
            <div className="Product__img"> 
                <img src={image1}></img>
            </div>

            <div className="Product__text">
                <div>
                    <span> Cây chân chim 
                    </span>
                </div>
                <div>
                    <span>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </span> 
                </div>
                <div>
                    <span>250 000 đ</span> 
                    <span>550 000 đ</span>
                </div>
            </div>
        </div>
    )
}
}
export default Product
