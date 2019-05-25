import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import HeaderImg from './Header/HeaderImg';
import TopHeader from './Header/TopHeader';
import Footer from './Footer/Footer';
import Home from './Home/home';
import ProductList from './ProductList/productList';
import './NavBar.css';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <TopHeader></TopHeader>
                    <HeaderImg></HeaderImg>
                    <ul className="NavBar">
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
                    <div>
                        <Route exact path="/" component={Home}/>
                        <Route path="/product" component={ProductList}/>
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

export default App;
