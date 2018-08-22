const initialState = {
    count : 0
}

export const counterReducer = (state = initialState, param) => {
    switch (param.type) {
        case  "increment" : return Object.assign({}, state, {count : ++state.count});
        case  "decrement" : return  Object.assign({}, state, {count : --state.count});
        default : return state;
    }
}