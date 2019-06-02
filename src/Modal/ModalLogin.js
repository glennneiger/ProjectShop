import React from 'react';
import { connect } from 'react-redux';
import { switchLogin } from '../actions';


class ModalLogin extends React.Component {
    render() {
        return (
            <div className="modal_box">
                <div className="modal_header">
                    <p>Chào mừng bạn! Hãy đăng nhập để tiếp tục</p>
                    <div>
                        Bạn chưa là thành viên?
                        <button type="button" onClick={() => this.props.switchLogin(false)}>Đăng kí</button> ngay.
                        </div>
                </div>
                <div className="modal_body">
                    <div className="modal_input">
                        <div className="login_input">
                            <label htmlFor={"input_nameLogin" + this.props.indexx} >Tên đăng nhập hoặc email*</label>
                            <input id={"input_nameLogin" + this.props.indexx} className="input-with-status__input" type="text" placeholder="Vui lòng nhập tên đăng nhập hoặc email của bạn" />
                        </div>
                        <div className="login_input">
                            <label htmlFor={"input_pwLogin" + this.props.indexx}>Mật khẩu*</label>
                            <input id={"input_pwLogin" + this.props.indexx} className="input-with-status__input" type="password" placeholder="Vui lòng nhập mật khẩu của bạn" />
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
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        switchLogin: (name) => dispatch(switchLogin(name))
    }
}

export default connect(null, mapDispatchToProps) (ModalLogin);
