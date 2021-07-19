const initialState = {
    step: 1,
};

const steps = (state = initialState, action) => {
    switch (action.type) {
        case 'NEXT_STEP':
            return {
                ...state,
                step : state.step + 1
            }
        case 'PRE_STEP':
            return {
                ...state,
                step : state.step - 1
            }
        default:
            return state
    }
}
export default steps