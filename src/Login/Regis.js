import React, { Component } from "react";
import './Regis.css';
import axios from 'axios';

class Regis extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            pw: "",
            pw2: "",
            name: "",
            phone: "",
            email: "",
            checkLogIn: false,
        }
    }
    getInputUser = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    getInputPw = (e) => {
        this.setState({
            pw: e.target.value
        })
    }
    getInputPw2 = (e) => {
        this.setState({
            pw2: e.target.value
        })
    }
    getInputMail = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    getInputPhone = (e) => {
        this.setState({
            phone: e.target.value
        })
    }
    getInputName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    checkLength = (o, n, min, max) => {
        if (o.length > max || o.length < min) {
            alert("Length of " + n + " must be between " +
                min + " and " + max + ".");
            return false;
        } else {
            return true;
        }
    }
    checkRegexp = (o, regexp, n) => {
        if (!(regexp.test(o))) {
            alert("Wrong Email Validation. " + n);
            return false;
        } else {
            return true;
        }
    }
    addUser = () => {
        var emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        var self = this;
        var valid = true;
        valid = valid && self.checkLength(self.state.name, "Email", 6, 25);
        valid = valid && self.checkLength(self.state.phone, "Phone", 10, 11);
        valid = valid && self.checkLength(self.state.pw, "Password", 6, 16);
        valid = valid && self.checkLength(self.state.username, "Username", 6, 16);
        valid = valid && self.checkRegexp(self.state.email, emailRegex, " Example: linhnguyen@gmail.com");

        if (valid) {
            axios.post('http://5ca34ca3190b430014edbc76.mockapi.io/user',
                {
                    name: self.state.name, id: "", phone: self.state.phone, email: self.state.email,
                    username: self.state.username, pw: self.state.pw
                }
            )
            alert("Regisitration Success !!!")
        }

    }
    render() {
        console.log(this.state);
        return (

            <div className="Regis">
                <div className="Top">
                    <div>
                        <p>THÔNG TIN CÁ NHÂN</p>
                    </div>
                    <div>
                        <div>
                            <label>Họ và tên <span> *</span></label>
                            <input onChange={this.getInputName} type="text"></input>
                        </div>
                        <div>
                            <label>Số điện thoại <span> *</span></label>
                            <input onChange={this.getInputPhone} type="text"></input>
                        </div>
                        <div>
                            <label>Địa chỉ Email <span> *</span></label>
                            <input onChange={this.getInputMail} type="text"></input>
                        </div>
                        <div>
                            <label>Username <span> *</span></label>
                            <input onChange={this.getInputUser} type="text"></input>
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
                                <input onChange={this.getInputPw} type="text"></input>
                            </div>
                            <div>
                                <label>Nhập lại mật khẩu <span>*</span></label>
                                <input onChange={this.getInputPw2} type="text"></input>
                            </div>
                            <div>
                                <button className="back">QUAY LẠI</button>
                            </div>
                            <div>
                                <button onClick={this.addUser} className="singIn">ĐĂNG KÝ</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default Regis;
