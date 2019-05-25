import React, { Component } from "react";
import './TopFooter.css';
class TopFooter extends Component {
    render() {

        return (
            <div className="TopFooter">
                <div>
                    <h6>KÊNH THÔNG TIN TỪ CHÚNG TÔI
            <br></br>
                        <span> <a href="">
                            <i className="fab fa-facebook-f" />
                        </a>
                            <a href="">
                                <i className="fab fa-twitter" />
                            </a>
                            <a href="">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </span>
                    </h6>
                </div>

                <div  >
                    <h6>ĐĂNG KÍ NHẬN <br></br>EMAIL TỪ CHÚNG TÔI</h6>
                </div>

                <div>
                    <form action="/action_page.php">
                        <input
                            type="text"
                            placeholder="  Tìm kiếm.."
                            name="search"
                        />
                        <button type="submit">
                            <i className="fas fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}
export default TopFooter
