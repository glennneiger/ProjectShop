import React from 'react';
import { Link } from "react-router-dom";


class ListView extends React.Component {
    render() {
        const { price, name, img } = this.props;
        return (
            <div className="resultView_list">
                <div className="resultView_itemImg-list">
                    <img src={img} alt="alt" />
                </div>
                <div className="resultView_itemDesc-list">
                    <p className="resultView_itemName"> {name} </p>
                    <p className="resultView_itemRating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </p>
                    <p className="resultView_itemDetail">
                        Cây Ngọc Ngân là loại cây dành cho tình yêu! Đây là món quà bất ngờ để bạn tặng "người ấy". Ngọc ngân(Valentine)
                        không chỉ đẹp ở phần lá xanh đốm trắng.
                    </p>
                    <p className="resultView_itemPrice-current">
                        {price} đ
                    </p>
                    <button type="button" className="resultView_itemBtn"> MUA NGAY </button>
                    <Link to="/regis"><i className="fas fa-user-plus"></i>Đăng kíg</Link>
                    <Link to="/login"><i className="fas fa-user"> </i>Đăng nhập</Link>
                    <Link to="/product-Detail">detail</Link>
                </div>
            </div>
        );
    }
}

export default ListView;
