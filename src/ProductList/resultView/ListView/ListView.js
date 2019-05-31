import React from 'react';
// import { Link } from "react-router-dom";
import Modal from 'react-awesome-modal';
import './modalListView.css';


class ListView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    openModal() {
        this.setState({
            visible: true
        });
    }

    closeModal() {
        this.setState({
            visible: false
        });
    }
    render() {
        const { price, name, img } = this.props;
        return (
            <div className="resultView_list">
                <div className="resultView_itemImg-list">
                    <img src={img} alt="alt" />
                </div>
                <div className="resultView_itemDesc-list">
                    <p className="resultView_itemName"> {name} </p>
                    <p className="resultView_itemRating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </p>
                    <p className="resultView_itemDetail">
                        {name} là loại cây dành cho tình yêu! Đây là món quà bất ngờ để bạn tặng "người ấy". Ngọc ngân(Valentine)
                        không chỉ đẹp ở phần lá xanh đốm trắng.
                    </p>
                    <p className="resultView_itemPrice-current">
                        {price} đ
                    </p>
                    <button type="button" className="resultView_itemBtn" onClick={() => this.openModal()} > MUA NGAY </button>
                    <Modal
                        visible={this.state.visible}
                        width="810"
                        height="350"
                        effect="fadeInDown"
                        onClickAway={() => this.closeModal()}
                    >
                        <div className="modal_box">
                            <div className="modal_header">
                                <p>Chào mừng bạn! Hãy đăng nhập để tiếp tục</p>
                                <div>
                                    Bạn chưa là thành viên? <button type="button">Đăng kí</button> ngay.
                                </div>
                            </div>
                            <div className="modal_body">
                                <div className="modal_input">
                                    <div className="login_input">
                                        <label htmlFor="input_name" >Tên đăng nhập hoặc email*</label>
                                        <input id="input_name" class="input-with-status__input" type="text" placeholder="Vui lòng nhập tên đăng nhập hoặc email của bạn" />
                                    </div>
                                    <div className="login_input">
                                        <label htmlFor="input_pw">Mật khẩu*</label>
                                        <input id="input_pw" class="input-with-status__input" type="password" placeholder="Vui lòng nhập mật khẩu của bạn" />
                                    </div>
                                    <div className="login_forgot">
                                        <button>Quên mật khẩu?</button>
                                    </div>
                                </div>
                                <div className="modal_btn">
                                    <button type="button" className="mod-button">Đăng nhập</button>
                                    <p>Hoặc, đăng nhập bằng</p>
                                    <button type="button" className="mod-button mod-login-fb "> <i className="fab fa-facebook-f"></i> &emsp; Facebook</button>
                                    <button type="button" className="mod-button mod-login-google"> <i className="fab fa-google-plus-g"></i> &emsp; Google</button>
                                </div>
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default ListView;
