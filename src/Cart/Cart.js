import React, { Component } from "react";
import './Cart.css';
import ProductRow from "./ProductRow";
class Cart extends Component {

render() {
   
    return (
        <div className="Cart">
            <h1>GIỎ HÀNG</h1>'
            <table >
            <tr>
                    <td>HÌNH ẢNH</td>
                    <td>TÊN SẢN PHẨM</td>
                    <td>ĐƠN GIÁ</td>
                    <td>SỐ LƯỢNG</td>
                    <td>THÀNH TIỀN</td>
                    <td>XÓA</td>
                   
                </tr>
            <ProductRow></ProductRow>
            <ProductRow></ProductRow>
            <ProductRow></ProductRow>
            </table>
            <div className="buttonGroup">
                <button >HỦY ĐƠN HÀNG</button>
                <button className="light" >TIẾP TỤC MUA</button>
            </div>
            <div className="total"> 
                <div>
                <table>
                    <tr>
                        <td>TỔNG TIỀN (CHƯA THUẾ)</td>
                        <td>270 000đ</td>
                    </tr>
                    <tr>
                        <td>THUẾ VAT (10%)</td>
                        <td>27000đ</td>
                    </tr>
                    <tr>
                        <td>TỔNG PHẢI THANH TOÁN</td>
                        <td>297 000đ</td>
                    </tr>
                    
                </table>
                </div>
                
            </div>
            <div className="buttonGroup2">
                <button >THANH TOÁN</button>
                
            </div>
        </div>
    )
}
}
export default Cart
