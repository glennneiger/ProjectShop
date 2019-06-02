

export default function checkLogIn(state = {status: false, name: "", cart: []}, action) {
    switch (action.type) {
        case 'CHECKLOGIN':
            return {status: action.status, name: action.name, cart: action.cart};
        default:
            return state;
    }
}