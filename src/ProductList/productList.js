import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { fetchProducts } from '../actions'
import heading from './heading.png';
import './productList.css';
import ResultViewGrid from './resultView/resultViewGrid';
import ResultViewList from './resultView/resultViewList';

class ProductList extends React.Component {
    componentDidMount() {
        this.props.fetchProducts();
    }
    render() {
        return (
            <BrowserRouter>
                <div className="wrapper">
                    <div className="product container">
                        <div className="menu-left">
                            <div className="filterSpecies">
                                <p className="block_title">
                                    Danh mục sản phẩm
                        </p>
                                <hr className="block_title-hr"></hr>
                                <div>
                                    <div className="filter_item"> Cây chậu treo </div>
                                    <div className="filter_item"> Cây cỏ hoa </div>
                                    <div className="filter_item"> Cây dây leo </div>
                                    <div className="filter_item"> Cây để bàn </div>
                                    <div className="filter_item"> Cây may mắn </div>
                                    <div className="filter_item"> Cây trang trí </div>
                                    <div className="filter_item"> Cây nội thất </div>
                                </div>
                            </div>
                            <div className="filterPrice">
                                <p className="block_title">
                                    Tìm theo giá
                        </p>
                                <hr className="block_title-hr"></hr>
                                <div>
                                    <div className="filter_item"> 200.000 Đ-400.000 Đ </div>
                                    <div className="filter_item"> 400.000 Đ-600.000 Đ </div>
                                    <div className="filter_item"> 600.000 Đ-800.000 Đ </div>
                                    <div className="filter_item"> 800.000 Đ-1.000.000 Đ </div>
                                    <div className="filter_item"> 1.000.000 Đ-2.000.000 Đ </div>
                                </div>
                            </div>
                            <div className="filterColor">
                                <p className="block_title">
                                    Tìm theo giá
                        </p>
                                <hr className="block_title-hr"></hr>
                                <div>
                                    <div className="filter_item"> Xanh cây </div>
                                    <div className="filter_item"> Đỏ cam </div>
                                    <div className="filter_item"> Tím </div>
                                    <div className="filter_item"> Xanh trời </div>
                                    <div className="filter_item"> Vàng </div>
                                    <div className="filter_item"> Hồng </div>
                                </div>
                            </div>
                        </div>

                        <div className="displayProduct">
                            <div className="displayHeading">
                                <div className="headingImg">
                                    <img src={heading} alt="heading" />
                                </div>
                                <div className="headingNav">
                                    <div>
                                        <Link to="/product" className="view_product">
                                            <i className="fas fa-th"></i>
                                        </Link>
                                        <Link to="/product/listView" className="view_product">
                                            <i className="fas fa-list"></i>
                                        </Link>
                                    </div>
                                    <div>
                                        <div className="sort_product">
                                            <span>Sắp xếp theo</span>
                                            <select>
                                                <option value="name"> Tên sản phẩm </option>
                                                <option value="price"> Giá sản phẩm </option>
                                            </select>
                                        </div>
                                        <div className="sort_product">
                                            <span>Show</span>
                                            <select>
                                                <option value="8"> 6 </option>
                                                <option value="12"> 12 </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="resultView">
                                <Route exact path="/product" component={ResultViewGrid}/>
                                <Route path="/product/listView" component={ResultViewList}/>
                            </div>

                            <div className="pageController_product">
                                <button type="button" className="pagePrev"> Trang trước </button>
                                <button type="button" className="page number1"> 1 </button>
                                <button type="button" className="page number2"> 2 </button>
                                <button type="button" className="page number3"> 3 </button>
                                <button type="button" className="page number4"> 4 </button>
                                <button type="button" className="pageLast"> Trang cuối </button>
                            </div>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}



const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    }
}

export default connect(null, mapDispatchToProps)(ProductList);