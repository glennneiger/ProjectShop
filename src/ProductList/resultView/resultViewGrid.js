import React from 'react';
import { connect } from 'react-redux';
import GridView from './GridView/GridView';



class ResultViewGrid extends React.Component {
    render() {
        const filterColor = this.props.dataList.filterColor;
        const filterSpecies = this.props.dataList.filterSpecies;
        const filterPrice = this.props.dataList.filterPrice;
        // console.log("price min : " , (filterPrice.min));
        // console.log("price max : " , (filterPrice.max));
        const listFilter = this.props.dataList.data.filter(
            (list) => {
                return list.color.indexOf(filterColor) !== -1 && list.species.indexOf(filterSpecies) !== -1 && filterPrice.min <= parseInt(list.price) && parseInt(list.price) <= filterPrice.max;
            }
        );
        // console.log(listFilter);
        const sortProduct = listFilter.slice(0);

        this.props.dataList.sort === "name"
            ?
                sortProduct.sort((a,b) => {
                    let x = a.name.toLowerCase();
                    let y = b.name.toLowerCase();
                    return x < y ? -1 : x > y ? 1 : 0;
                })
            :
                sortProduct.sort((a,b) => {
                    return a.price - b.price;
                })

        const listData = sortProduct.map((item, index) => {
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
        dataList: state
    };
};


export default connect(mapStateToProps, null)(ResultViewGrid);
