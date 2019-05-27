import React, { Component } from "react";
import './Regis.css';

class Regis extends Component {
  render() {
 
    return (
      
        <div className="Regis">
              <div className="Top">
                <div>
                    <p>THÔNG TIN CÁ NHÂN</p>
                </div>
                <div>
                    <div>
                        <label>Họ và tên <span> *</span></label>
                        <input type="text"></input>
                    </div>
                    <div> 
                        <label>Số điện thoại <span> *</span></label>
                        <input type="text"></input>
                    </div>
                    <div>
                        <label>Địa chỉ Email <span> *</span></label>
                        <input type="text"></input>
                    </div>
                    <div>
                        <label>Website của bạn <span> *</span></label>
                        <input type="text"></input>
                    </div>
                    <div className="checkBox">
                        <input type="checkbox"></input>
                        <label>Đăng ký thông tin qua email</label>
                        
                    </div>
                    
                </div>
                <div className="Bottom">
                <div>
                    <p>THÔNG TIN TÀI KHOẢN</p>
                </div>
                <div>
                    <div>
                        <label>Mật khẩu <span>*</span></label> 
                        <input type="text"></input>
                    </div>
                    <div>
                        <label>Nhập lại mật khẩu <span>*</span></label>
                        <input type="text"></input>
                    </div>
                    <div>
                        <button className="back">QUAY LẠI</button>
                    </div>
                    <div>
                        <button className="singIn">ĐĂNG KÝ</button>
                    </div>
                    
                </div>
            </div>
            </div>
        </div>
     
    );
  }
}
export default Regis;
