import { combineReducers } from 'redux';
import data from './data';
import filterPrice from './filterPrice';
import filterColor from './filterColor';
import filterSpecies from './filterSpecies';
import sort from './sort'
import productDetail from './productDetail';

export default combineReducers({
    data,
    filterPrice,
    filterColor,
    filterSpecies,
    sort,
    productDetail
})