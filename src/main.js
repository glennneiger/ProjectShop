import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/home';
import ProductList from './ProductList/productList';
import Login from './Login/Login';
import Regis from './Login/Regis';
import Cart from './Cart/Cart'
import ProductDetail from './ProductDetail/productDetail';

class Main extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/product" component={ProductList} />
                    <Route path="/login" component={Login} />
                    <Route path="/regis" component={Regis} />
                    <Route path="/cart" component={Cart} />
                    <Route exact path="/product-Detail" component={ProductDetail} />
                </Switch>
            </div>
        );
    }
}

export default Main;