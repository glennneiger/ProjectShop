import React from 'react';
import { connect } from 'react-redux';
import GridView from './GridView/GridView';



class ResultViewGrid extends React.Component {
    render() {
        const listData = this.props.todoList.map((item, index) => {
            return <GridView key={index} index={index} {...item}/>;
        });
        return (
            <div className="resultViewGrid">
                {listData}
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        todoList: state
    };
};

export default connect(mapStateToProps, null)(ResultViewGrid);
