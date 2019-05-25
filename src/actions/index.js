import axios from 'axios';


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