import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import HeaderImg from './Header/HeaderImg';
// import TopHeader from './Header/TopHeader';
import Footer from './Footer/Footer';
import ProductList from './ProductList/productList';
import Login from './Login/Login';
import Regis from './Login/Regis';
import { connect } from 'react-redux';
import { fetchProducts } from './actions'
import Home from './Home/home';
import './NavBar.css';
import './App.css';
import './TopHeader.css';


class App extends React.Component {
    componentDidMount() {
        this.props.fetchProducts();
    }
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <div className="TopHeader">
                        <div className="TopHeader-inner">
                            <span>Open time 8:00 -18:00 Monday - Sunday</span>
                            <span> </span>
                            <Link to="/"> <i className="fab fa-facebook-f" /> </Link>
                            <Link to="/"> <i className="fab fa-twitter"/> </Link>
                            <Link to="/"> <i className="fab fa-linkedin-in"/> </Link>
                            <Link to="/"> <i className="fab fa-instagram"/> </Link>             
                            <div className="TopHeader-login">
                                <Link to="/login"><i className="fas fa-user"> </i>Đăng nhập</Link>
                                <Link to="/regis"><i className="fas fa-user-plus"></i>Đăng kí</Link>   
                            </div>
                        </div>
                    
                </div>
                    <HeaderImg></HeaderImg>
                    <div className="NavBar">
                        <ul >
                            <li>
                                <Link > <i className="fas fa-bars"></i> </Link>
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
                        </ul>
                    </div>
                    <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/product" component={ProductList}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/regis" component={Regis}/>

                        {/* <Route exact path="/" component={Home}/>
                        <Route path="/intro" component={intro}/>
                        <Route path="/product" component={product}/>
                        <Route path="/newproduct" component={newproduct}/>
                        <Route path="/contact" component={contact}/> */}
                    </div>
                    <Footer></Footer>
                </div>
            </BrowserRouter>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    }
}

export default connect(null, mapDispatchToProps)(App);
