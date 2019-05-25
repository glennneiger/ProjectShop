import React, { Component } from "react";
import './TopHeader.css';

class TopHeader extends Component {
  render() {
 
    return (
      <div className="TopHeader">
        <div className="TopHeader-inner">
            <span>Open time 8:00 -18:00 Monday - Sunday</span>
            <span> </span>
            <a href=""> <i className="fab fa-facebook-f" /> </a>
            <a href=""> <i className="fab fa-twitter"/> </a>
            <a href=""> <i className="fab fa-linkedin-in"/> </a>
            <a href=""> <i className="fab fa-instagram"/> </a>

            <div className="TopHeader-login">
                <a href=""> <i className="fas fa-user"> </i> Đăng nhập</a>
                <a href=""> <i  className="fas fa-user-plus"></i> Đăng kí</a>
            </div>
        </div>
      </div>
    );
  }
}
export default TopHeader;
