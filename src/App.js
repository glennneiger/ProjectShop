import React from 'react';
import { Link } from "react-router-dom";
// import TopHeader from './Header/TopHeader';
import Footer from './Footer/Footer';

import { connect } from 'react-redux';
import { fetchProducts } from './actions'
import './NavBar.css';
import './App.css';
import './TopHeader.css';
import Main from './main';
import image from './Image/Image/image.png';
import image2 from './Image/Image/image2.png';
import './HeaderImg.css';


class App extends React.Component {
    componentDidMount() {
        this.props.fetchProducts();
    }
    render() {
        return (
            <div className="App">
                <div className="TopHeader">
                    <div className="TopHeader-inner">
                        <span>Open time 8:00 -18:00 Monday - Sunday</span>
                        <span> </span>
                        <Link to="/"> <i className="fab fa-facebook-f" /> </Link>
                        <Link to="/"> <i className="fab fa-twitter" /> </Link>
                        <Link to="/"> <i className="fab fa-linkedin-in" /> </Link>
                        <Link to="/"> <i className="fab fa-instagram" /> </Link>
                        <div className="TopHeader-login">
                            <Link to="/login"><i className="fas fa-user"> </i>Đăng nhập</Link>
                            <Link to="/regis"><i className="fas fa-user-plus"></i>Đăng kí</Link>
                        </div>
                    </div>

                </div>
                <div className="HeaderImg">
                    <div className="HeaderImg-wrap">
                        <img src={image} alt="dfsf" />
                        <img src={image2} alt="dfd " />
                        <div className="HeaderImg-wrapInner">
                            <div className="HeaderImg-inner">
                                <span> <i className="fas fa-phone"> </i> HỖ TRỢ : 091270929 -091270929 </span>
                                <form action="/action_page.php">
                                    <input type="text" placeholder="  Tìm kiếm.." name="search" />
                                    <button type="submit"> <i className="fa fa-search" /> </button>
                                </form>
                            </div>

                            <div className="HeaderImg-cart">
                                <Link to="/cart"> <i className="fas fa-shopping-basket"> {" "} <span>0 sản phẩm</span> </i></Link>
                            </div>
                        </div>
                    </div>
                </div>                <div className="NavBar">
                    <ul >
                        <li>
                            <Link to="/"> <i className="fas fa-bars"></i> </Link>
                        </li>
                        <li>
                            <Link to="/">TRANG CHỦ</Link>
                        </li>
                        <li>
                            <Link to="/intro">GIỚI THIỆU</Link>
                        </li>
                        <li>
                            <Link to="/product">SẢN PHẨM</Link>
                        </li>
                        <li>
                            <Link to="/newproduct">SẢN PHẨM MỚI</Link>
                        </li>
                        <li>
                            <Link to="/contact">LIÊN HỆ</Link>
                        </li>
                        <li>
                            <Link to="/contact"><i class="fa fa-search"></i></Link>
                        </li>
                        <li>
                            <Link to="/cart"> <i className="fas fa-shopping-basket"> </i></Link>
                        </li>
                    </ul>
                </div>
                <Main />
                <Footer></Footer>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    }
}

export default connect(null, mapDispatchToProps)(App);
