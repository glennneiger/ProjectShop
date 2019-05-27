
export default function filterPrice(state = "", action) {
    switch (action.type) {
        case 'filterPrice':
            console.log("action.re", action.data);
            return action.data;
        default:
            return state;
    }
}