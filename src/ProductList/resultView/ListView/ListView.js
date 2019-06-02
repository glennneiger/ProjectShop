import React from 'react';
// import { Link } from "react-router-dom";
import Modal from 'react-awesome-modal';
import './modalListView.css';
import ModalRigs from '../../../Modal/ModalRigs';
import ModalLogin from '../../../Modal/ModalLogin';
import { connect } from 'react-redux';


class ListView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            login: true
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
                        height="450"
                        effect="fadeInDown"
                        onClickAway={() => this.closeModal()}
                    >
                        {this.props.switchLogin ? <ModalLogin indexx={img}/> : <ModalRigs indexx={img} />}
                    </Modal>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        switchLogin: state.switchLogin
    };
};

export default connect(mapStateToProps, null) (ListView);
