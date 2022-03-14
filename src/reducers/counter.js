import { INCREMENT, DECREMENT } from "../actions/typeDefine";

const counterReducers = (times = 0, action) => {
    switch(action.type){
        case INCREMENT:
            return times + 1;
        case DECREMENT:
            return times - 1;
        default:
            return times
    }
}

export default counterReducers;