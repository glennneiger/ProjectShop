import axios from 'axios';
// import { cpus } from 'os';


export function fetchProducts() {
	return (dispatch) => {
		return axios.get('https://5ca5c51d3a08260014278a74.mockapi.io/flowershop')
		.then((response)=> {
			dispatch(fetchSuccess(response.data));
		})
		.catch((response) => {
			dispatch(fetchError(response));
		});
	}
}

export function fetchSuccess(re) {
	return { type: 'OKK', data: re };
}
export function fetchError(er) {
	return { type: 'ERROR', data: er};
}

export function filterColor(color) {
	return { type: 'FILTERCOLOR', color: color};
}

export function filterSpecies(species) {
	return { type: 'FILTERSPECIES', species: species};
}

export function filterPrice(min,max) {
	return { type: 'FILTERPRICE', min: min, max: max};
}

export function sort(data) {
	return { type: 'SORT', data: data};
}

export function checkLogIn(check) {
	return { type: 'CHECKLOGIN', check: check};
}