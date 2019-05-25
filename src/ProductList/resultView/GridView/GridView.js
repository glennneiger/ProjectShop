import React from 'react';


class GridView extends React.Component {
    render() {
        const { index, price, name, img } = this.props;
        return (
            <div className="resultView_grid">
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
                        <span className="resultView_itemPrice-current"> {price} đ </span>
                        <span className="resultView_itemPrice-last"> {price} đ </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default GridView;
