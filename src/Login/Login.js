import React, { Component } from "react";
import './Login.css';
import axios from 'axios';
import Home from '../Home/home'
import { connect } from 'react-redux';
import { fetchProducts,checkLogIn } from '../actions';
class Login extends Component {
  constructor(props){
      super(props);
      this.state = {
        username: "" ,
        pw:"" ,
        checkLogIn:false,
      }
  }    
  checkLength = (o, n, min, max)=> {
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
        alert("Wrong Email Validation. " +n);
      return false;
    } else {
      return true;
    }
  }
  getUser = (e) => {
      var valid = true;
      var emailRegex =/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      e.preventDefault();
      const user = e.target.value;
      console.log(this.state);
      var state = this.state;
      var self = this;
      axios.get(`http://5ca34ca3190b430014edbc76.mockapi.io/user`)
      .then((res) => {
          res.data.forEach(function(element){
              valid = valid && self.checkLength(state.username, "Email", 6, 25);
              valid = valid && self.checkLength(state.pw, "password   ", 6, 16);
              // valid = valid && self.checkRegexp(state.username, emailRegex," Example: linhnguyen@gmail.com");
              if(element.username === state.username&&element.pw === state.pw&&valid)
                {  
                    self.setState({checkLogIn: true})
                    alert("Log In Success !!");
                   
                   
              }
          })
              if(!self.state.checkLogIn) alert("Wrong username or password")
      })
      
  }
    
  getInputUser = (e)=>{
    this.setState({
      username:e.target.value
    })
  }
  getInputPw = (e)=>{
    console.log(e.target.value)
    this.setState({
      pw:e.target.value
    })
  }

  render() {

  return (
      <div>
        {this.state.checkLogIn ? <Home login ={true}></Home>
            : <div className="Login">
            <div className="Left">
                <div>
                    <p>THÔNG TIN CÁ NHÂN</p>
                </div>
                <div>
                    <div>
                        <label>Tên đăng nhập </label>
                        <input onChange={this.getInputUser} type="text"></input>
                    </div>
                    <div>
                        <label>Mật khẩu </label>
                        <input onChange={this.getInputPw} type="text"></input>
                    </div>
                    <div className="checkBox">
                        <input type="checkbox"></input>
                        <label>Ghi nhớ mật khẩu</label>
                        <span>Bạn quên mật khẩu</span>
                    </div>
                    <div>
                        <button onClick={this.getUser} value="sss">ĐĂNG NHẬP</button>
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
     
        }
        </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
      fetchProducts: () => dispatch(fetchProducts()),
      checkLogIn: (check) => dispatch(checkLogIn(check))
  }
}

export default connect(null, mapDispatchToProps)(Login);