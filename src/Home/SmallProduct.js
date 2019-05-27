import React, { Component } from "react";
import './SmallProduct.css';
import image1 from './spx2-4.png'
class SmallProduct extends Component {
render() {
    const data = this.props.info;
    var image,name,price;
    if(data!=undefined) {
         image=data.img;
         name=data.name;
         price=data.price;
    }
    return (
        <div className={`SmallProduct`}>
            <div className="smallContainer">
            <div className="smallContainer__img">
                <img src={image}/>
            </div>
            <div className="smallContainer__text">
                <div>
                    <span> {name}
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
                    <span>{price}</span> 
                </div>
            </div> 
            </div>
        </div>
    )
}
}
export default SmallProduct
