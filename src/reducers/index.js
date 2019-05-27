import { combineReducers } from 'redux';
import data from './data';
import filterPrice from './filterPrice';
import filterColor from './filterColor';
import filterSpecies from './filterSpecies';
import sort from './sort'

export default combineReducers({
    data,
    filterPrice,
    filterColor,
    filterSpecies,
    sort
})