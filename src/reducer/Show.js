let initState = {
    showStatus: true //登录状态
}

let reducer = (state = initState, action) => {
    switch (action.type) {
        case 'SHOW':
            return {
                ...state,
                showStatus: true,
            }
            case 'HIDE':
                return {
                    ...state,
                    showStatus: false,
                }
                default:
                    return state;
    }
}

export default reducer;