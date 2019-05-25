import React, { Component } from "react";
import image from "./image.png";
import image2 from "./image2.png";

import "./HeaderImg.css";

class HeaderImg extends Component {
  render() {
    return (
      <div className="HeaderImg">
      <div className="HeaderImg-wrap">
          <img src={image} />
          <img src={image2} />
          <div className="HeaderImg-wrapInner">
          <div className="HeaderImg-inner">
            <span> <i className="fas fa-phone"> </i> HỖ TRỢ : 091270929 -091270929 </span>
            
            <form action="/action_page.php">
                <input type="text" placeholder="  Tìm kiếm.." name="search" />
                <button type="submit"> <i className="fa fa-search" /> </button>
            </form>
          </div>

          <div className="HeaderImg-cart">
            <i className="fas fa-shopping-basket"> {" "} <span>0 sản phẩm</span> </i>
          </div>
          </div>
          </div>
      </div>
    );
  }
}
export default HeaderImg;

//