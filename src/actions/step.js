

export const nextStep = (dispatch, data) => {
    dispatch({
        type : "NEXT_STEP",
        data
    })
}


export const preStep = (dispatch, data) => {
    dispatch({
        type : "PRE_STEP",
        data
    })
}