import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { productDetail } from '../../../actions';

class GridView extends React.Component {
    render() {
        const { price, name, img } = this.props;
        return (
            <Link to="/product-Detail" className="resultView_grid" title={name} onClick={() => this.props.productDetail(name,img,price)}>
                <div className="resultView_itemImg">
                    <img src={img} alt="alt" />
                </div>
                <div className="resultView_itemDesc">
                    <p className="resultView_itemName"> {name} </p>
                    <p className="resultView_itemRating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </p>
                    <div className="itemPrice">
                        <span className="resultView_itemPrice-current"> {parseInt(price)} đ </span>
                        <span className="resultView_itemPrice-last"> {parseInt(price) + 50000} đ </span>
                    </div>
                </div>
            </Link>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        productDetail: (name, img, price) => dispatch(productDetail(name, img, price)),
    }
}

export default connect(null, mapDispatchToProps) (GridView);
