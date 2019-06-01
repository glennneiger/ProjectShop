import React from 'react';
import { Link } from "react-router-dom";
import HeaderImg from './Header/HeaderImg';
// import TopHeader from './Header/TopHeader';
import Footer from './Footer/Footer';

import { connect } from 'react-redux';
import { fetchProducts } from './actions'
import './NavBar.css';
import './App.css';
import './TopHeader.css';
import Main from './main';


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
                <HeaderImg></HeaderImg>
                <div className="NavBar">
                    <ul >
                        {/* <li>
                                <Link > <i className="fas fa-bars"></i> </Link>
                            </li> */}
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
