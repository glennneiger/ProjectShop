

export default function checkLogIn(state = {status: false, name: "", cart: []}, action) {
    switch (action.type) {
        case 'CHECKLOGIN':
            console.log("action.CHECKLOGIN", action.check);
            return action.check;
        default:
            return state;
    }
}