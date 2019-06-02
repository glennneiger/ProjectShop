import React from 'react';
import './productDetail.css'
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { productDetail } from '../actions';
import Modal from 'react-awesome-modal';
import ModalRigs from '../Modal/ModalRigs';
import ModalLogin from '../Modal/ModalLogin';


class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            srcimg: this.props.stateReducers.productDetail.img,
            number: 0,
            visible: false
        }
    }
    handleImg(img) {
        this.setState({
            srcimg: img
        })
    }
    handleCount(number) {
        let count = this.state.number;
        this.setState({
            number: count += number
        })
    }
    openModal() {
        this.setState({
            visible: true
        });
    }

    closeModal() {
        this.setState({
            visible: false
        });
    }
    componentDidMount() {
        this.setState({
            srcimg: this.props.stateReducers.productDetail.img
        })
    }
    render() {
        const name = this.props.stateReducers.productDetail.name;
        const img = this.props.stateReducers.productDetail.img;
        // console.log(this.props.productDetails.productDetail);
        const price = this.props.stateReducers.productDetail.price;
        // console.log(this.state.srcimg);

        return (
            <div className="productDetail container">
                <div className="collectiion_page">
                    <NavLink exact to="/">Home /</NavLink>
                    <span>{name}</span>
                </div>
                <div className="product_info">
                    <div className="product_info-gallery">
                        <div className="product_gallery-preview">
                            <img src={this.state.srcimg} alt="altImg" />
                        </div>
                        <div className="product_gallery-thumb">
                            <div className="gallery_thumb-item" onClick={() => this.handleImg(img)}>
                                <img src={img} alt="altImg" />
                            </div>
                            <div className="gallery_thumb-item" onClick={() => this.handleImg("images/spx2-5.png")}>
                                <img src="images/spx2-5.png" alt="altImg" />
                            </div>
                            <div className="gallery_thumb-item" onClick={() => this.handleImg("images/spx2-6.png")}>
                                <img src="images/spx2-6.png" alt="altImg" />
                            </div>
                            <div className="gallery_thumb-item" onClick={() => this.handleImg("images/spx2-7.png")}>
                                <img src="images/spx2-7.png" alt="altImg" />
                            </div>
                            <div className="gallery_thumb-item" onClick={() => this.handleImg("images/spx2-8.png")}>
                                <img src="images/spx2-8.png" alt="altImg" />
                            </div>
                        </div>
                    </div>
                    <div className="product_info-desc">
                        <p className="product_name"> {name} </p>
                        <p className="product_rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </p>
                        <div className="product_price">
                            <span className="product_price-current"> {price} đ </span>
                            <span className="product_price-last"> {parseInt(price) + 50000} đ </span>
                        </div>
                        <p className="product_detail">
                            Cây mọc thành bụi thưa, thân vươn thẳng với chiều cao cây trung bình từ 0,8-1,2m. Lá hình trứng, mép lá nguyên, gân lá nổi rõ, phiến rộng khoảng từ 15-20cm. Lá có màu xanh đậm ở mặt trên, quanh gân lá có màu trắng sữa; mặt dưới lá nhạt màu hơn. Lá cây dạ lam mọc cách, cuống lá dài khi rụng để lại các khía màu nâu nhạt.
                        </p>
                        <div className="product_chooseNumber">
                            <span>Số lượng: </span>
                            <button type="button" className="product_abate" disabled={this.state.number < 1} onClick={() => this.handleCount(-1)} >-</button>
                            <div className="product_number"> {this.state.number} </div>
                            <button type="button" className="product_augment" onClick={() => this.handleCount(1)} >+</button>
                        </div>
                        <button type="button" className="product_btn" onClick={() => this.openModal()}> MUA NGAY </button>
                        <Modal
                            visible={this.state.visible}
                            width="810"
                            height="480"
                            effect="fadeInDown"
                            onClickAway={() => this.closeModal()}
                        >
                            {this.props.stateReducers.switchLogin ? <ModalLogin indexx={img}/> : <ModalRigs indexx={img} />}
                        </Modal>
                    </div>
                </div>

                <div className="product_same">
                    <p className="block_title">
                        Sản phẩm cùng loại
                    </p>
                    <hr className="block_title-hr"></hr>
                    <div className="product_same-box">
                        <Link to="/product-Detail" className="product_same-item" onClick={() => this.props.productDetail("Cây cọ Nhật", "images/spx2-4.png", 250000)}>
                            <div className="same-img">
                                <img src="images/spx2-4.png" alt="alt" />
                            </div>
                            <div className="same_desc">
                                <p className="same_name"> Cây Cọ Nhật </p>
                                <p className="same_rating product_rating">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </p>
                                <div className="same_price">
                                    <span className="same_price-current product_price-current"> 250000 đ </span>
                                    <span className="same_price-last product_price-last"> 250000 đ </span>
                                </div>
                            </div>
                        </Link>
                        <Link to="/product-Detail" className="product_same-item" onClick={() => this.props.productDetail("Cây Dạ Lam", "images/spx2-5.png", 280000)}>
                            <div className="same-img">
                                <img src="images/spx2-4.png" alt="alt" />
                            </div>
                            <div className="same_desc">
                                <p className="same_name"> Cây Dạ Lam </p>
                                <p className="same_rating product_rating">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </p>
                                <div className="same_price">
                                    <span className="same_price-current product_price-current"> 250000 đ </span>
                                    <span className="same_price-last product_price-last"> 260000 đ </span>
                                </div>
                            </div>
                        </Link>
                        <Link to="/product-Detail" className="product_same-item" onClick={() => this.props.productDetail("Cây Cọ Ta", "images/spx2-6.png", 250000)}>
                            <div className="same-img">
                                <img src="images/spx2-3.png" alt="alt" />
                            </div>
                            <div className="same_desc">
                                <p className="same_name"> Cây Cọ Ta </p>
                                <p className="same_rating product_rating">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </p>
                                <div className="same_price">
                                    <span className="same_price-current product_price-current"> 250000 đ </span>
                                    <span className="same_price-last product_price-last"> 280000 đ </span>
                                </div>
                            </div>
                        </Link>
                        <Link to="/product-Detail" className="product_same-item" onClick={() => this.props.productDetail("Cây Cây Cây", "images/spx2-10.png", 220000)}>
                            <div className="same-img">
                                <img src="images/spx2-3.png" alt="alt" />
                            </div>
                            <div className="same_desc">
                                <p className="same_name"> Cây Cây Cây </p>
                                <p className="same_rating product_rating">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </p>
                                <div className="same_price">
                                    <span className="same_price-current product_price-current"> 250000 đ </span>
                                    <span className="same_price-last product_price-last"> 270000 đ </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        stateReducers: state
    };
};

const mapDispatchToProps = dispatch => {
    return {
        productDetail: (name, img, price) => dispatch(productDetail(name, img, price)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
