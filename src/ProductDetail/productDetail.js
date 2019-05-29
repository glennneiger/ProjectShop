import React from 'react';
import './productDetail.css'
import { Link } from 'react-router-dom';


class ProductDetail extends React.Component {
    constructor(){
        super();
        this.state = {
            img: "images/spx2-3.png"
        }
    }
    handleImg(img){
        this.setState({
            img: img
        })
    }
    render() {
        return (
            <div className="productDetail container">
                <div className="product_info">
                    <div className="product_info-gallery">
                        <div className="product_gallery-preview">
                            <img src={this.state.img} alt="altImg" />
                        </div>
                        <div className="product_gallery-thumb">
                            <div className="gallery_thumb-item" onClick={() => this.handleImg("images/spx2-3.png")}>
                                <img src="images/spx2-3.png" alt="altImg" />
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
                        <p className="product_name"> Cây Dạ Lam </p>
                        <p className="product_rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </p>
                        <div className="product_price">
                            <span className="product_price-current"> 500000 đ </span>
                            <span className="product_price-last"> 600000 đ </span>
                        </div>
                        <p className="product_detail">
                            Cây mọc thành bụi thưa, thân vươn thẳng với chiều cao cây trung bình từ 0,8-1,2m. Lá hình trứng, mép lá nguyên, gân lá nổi rõ, phiến rộng khoảng từ 15-20cm. Lá có màu xanh đậm ở mặt trên, quanh gân lá có màu trắng sữa; mặt dưới lá nhạt màu hơn. Lá cây dạ lam mọc cách, cuống lá dài khi rụng để lại các khía màu nâu nhạt.
                        </p>
                        <div className="product_chooseNumber">
                            <span>Số lượng: </span>
                            <div className="product_abate">-</div>
                            <div className="product_number">0</div>
                            <div className="product_augment">+</div>
                        </div>
                        <button type="button" className="product_btn"> MUA NGAY </button>
                    </div>
                </div>

                <div className="product_same">
                    <p className="block_title">
                        Sản phẩm cùng loại
                    </p>
                    <hr className="block_title-hr"></hr>
                    <div className="product_same-box">
                        <Link to="/product-Detail" className="product_same-item">
                            <div className="same-img">
                                <img src="images/spx2-4.png" alt="alt" />
                            </div>
                            <div className="same_desc">
                                <p className="same_name"> Cây cọ Nhật </p>
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
                        <Link to="/product-Detail" className="product_same-item">
                            <div className="same-img">
                                <img src="images/spx2-4.png" alt="alt" />
                            </div>
                            <div className="same_desc">
                                <p className="same_name"> Cây cọ Nhật </p>
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
                        <Link to="/" className="product_same-item">
                            <div className="same-img">
                                <img src="images/spx2-3.png" alt="alt" />
                            </div>
                            <div className="same_desc">
                                <p className="same_name"> Cây cọ Nhật </p>
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
                        <Link to="/" className="product_same-item">
                            <div className="same-img">
                                <img src="images/spx2-3.png" alt="alt" />
                            </div>
                            <div className="same_desc">
                                <p className="same_name"> Cây cọ Nhật </p>
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
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductDetail;
