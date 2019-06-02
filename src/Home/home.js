import React, { Component } from "react";
import { Slide } from 'react-slideshow-image';
import './home.css';
import banner from './banner.png'
import Product from './Product';
import SmallProduct from './SmallProduct';
import { connect } from 'react-redux';
import Modal from 'react-awesome-modal';

class Home extends Component {
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
    componentDidMount() {
        this.openModal();
    }
    render() {
        const data = this.props.todoList.data;
        const slideImages = [
            'https://wheelandbarrow.com.au/images/category_banner/DSC_0227.jpg',
            'https://vuoncayviet.com/data/items/1149/cay-canh-lam-qua-tang-de-thuong.jpg',
            'https://img.sunset02.com/sites/default/files/styles/4_3_horizontal_inbody_900x506/public/1483569001/grouped-big-leaf-houseplants-sun-0217.jpg?itok=fHBlNTVj'
          ];
        const properties = {
            duration: 7000,
            transitionDuration: 500,
            infinite: true,
            indicators: true,
            arrows: true
        }
        return (
            <div className="home">
                <Slide {...properties}>
                    <div className="each-slide">
                        <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
                        </div>
                    </div>
                </Slide>

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
                                    <input id="input_name" className="input-with-status__input" type="text" placeholder="Vui lòng nhập tên đăng nhập hoặc email của bạn" />
                                </div>
                                <div className="login_input">
                                    <label htmlFor="input_pw">Mật khẩu*</label>
                                    <input id="input_pw" className="input-with-status__input" type="password" placeholder="Vui lòng nhập mật khẩu của bạn" />
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

                <div className="hotProduct container">
                    <p className="blockTitle">
                        Sản phẩm nổi bật
                    </p>
                    <hr />
                    <div className="hotProduct_ct">
                        <div className="hotProduct_item">
                            <div className="wrapper">
                                <Product info={data[2]} box="boxA big"></Product>
                                <Product info={data[5]} box="boxB big"></Product>
                                <Product info={data[3]} box="boxC small"></Product>
                                <Product info={data[4]} box="boxD small"></Product>
                                <Product info={data[1]} box="boxE small"></Product>
                                <Product info={data[11]} box="boxF small"></Product>
                            </div>

                        </div>
                    </div>
                    <div className="hotProduct_ct2">
                        <div className="titleWrap">
                            <div>
                                <p className="blockTitle">
                                    Sản phẩm mua nhiều
                                </p>
                                <hr />
                            </div>
                            <div>
                                <p className="blockTitle 2">
                                    Sản phẩm khuyến mại
                                </p>
                                <hr />
                            </div>

                        </div>
                        <div className="wrapper2">
                            <div className="box1 small">
                                <SmallProduct info={data[7]}></SmallProduct>
                                <SmallProduct info={data[8]}></SmallProduct>
                                <SmallProduct info={data[6]}></SmallProduct>
                                <SmallProduct info={data[4]}></SmallProduct>
                                <SmallProduct info={data[13]}></SmallProduct>
                            </div>
                            <div className="titleWrap titleWrap2 ">
                                        <div>
                                            <p className="blockTitle">
                                                Sản phẩm mua nhiều
                                            </p>
                                            <hr/>
                                        </div>
                                        <div>
                                            <p className="blockTitle 2">
                                                Sản phẩm khuyến mại
                                            </p>
                                            <hr/>
                                        </div>
                                    </div>      
                            <Product info={data[12]} box="box2 small"></Product>
                            <Product info={data[14]} box="box3 small"></Product>
                            <Product info={data[1]} box="box4 small"></Product>
                            <Product info={data[7]} box="box5 small"></Product>
                            <Product info={data[6]} box="box6 small"></Product>
                            <Product info={data[3]} box="box7 small"></Product>
                        </div>
                    </div>
                    <div className="banner">
                        <img src={banner} alt="alr"></img>
                    </div>
                    <div className="hotProduct_ct3">
                        <p className="blockTitle">
                            Sản phẩm mới
                        </p>
                        <hr />
                        <div className="wrapper2">
                            <Product info={data[5]} box="box0 small"></Product>
                            <Product info={data[7]} box="box1--edit small"></Product>
                            <Product info={data[5]} box="box2 small"></Product>
                            <Product info={data[4]} box="box3 small"></Product>
                            <Product info={data[2]} box="box4 small"></Product>
                            <Product info={data[11]} box="box5 small"></Product>
                            <Product info={data[10]} box="box6 small"></Product>
                            <Product info={data[3]} box="box7 small"></Product>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        todoList: state
    };
};

export default connect(mapStateToProps, null)(Home);
