import React from 'react';
import { connect } from 'react-redux';
import ListView from './ListView/ListView';



class ResultViewList extends React.Component {
    render() {
        const listData = this.props.todoList1.map((item, index) => {
            return <ListView key={index} index={index} {...item}/>;
        });
        return (
            <div className="resultViewList">
                            <button onClick={()=>console.log(this.props.todoList1[0].name)}>ABC</button>

                {listData}
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        todoList1: state
    };
};
export default connect(mapStateToProps, null)(ResultViewList);
