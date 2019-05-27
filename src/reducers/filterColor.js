
export default function filterColor(state = "", action) {
    switch (action.type) {
        case 'FILTERCOLOR':
            console.log("action.FILTERcolor", action.color);
            return action.color;
        case 'ALLCOLOR':
                console.log("action.ALLcolor", action.color);
                return action.color;
        default:
            return state;
    }
}