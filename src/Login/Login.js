import React, { Component } from "react";
import './Login.css';

class Login extends Component {
  render() {
 
    return (
      
        <div className="Login">
            <div className="Left">
                <div>
                    <p>THÔNG TIN CÁ NHÂN</p>
                </div>
                <div>
                    <div>
                        <label>Email của bạn</label>
                        <input type="text"></input>
                    </div>
                    <div>
                        <label>Mật khẩu</label>
                        <input type="text"></input>
                    </div>
                    <div className="checkBox">
                        <input type="checkbox"></input>
                        <label>Ghi nhớ mật khẩu</label>
                        <span>Bạn quên mật khẩu</span>
                    </div>
                    <div>
                        <button>ĐĂNG NHẬP</button>
                    </div>

                </div>
            </div>
            <div className="Right">
                <div>
                    <p>BẠN CHƯA CÓ TÀI KHOẢN ?</p>
                </div>
                <div>
                    <p className="para">Đăng kí tài khoản để mua hàng nhanh chóng và dễ dàng hơn. Ngoài
                    ra còn nhiều chính sách ưu đãi cho thành viên citybike</p>
                </div>  
                <div>
                        <button className="singIn">ĐĂNG KÝ</button>
                    </div>
            </div>
        </div>
     
    );
  }
}
export default Login;
