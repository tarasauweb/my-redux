let initialState = 0;

let reducer = (state = initialState , action) => {
    if(action.type === 'Count_UP'){
        state = state + 1;
        return state
    }
    else if(action.type === 'Count_DOWN'){
        state = state - 1;
        return state
    }
    return state
}


export const countUpActionCreator = ()=>{
    return {
        type: 'Count_UP'
    }
}

export const countDownActionCreator = ()=>{
    return {
        type: 'Count_DOWN'
    }
}

export default reducer