
let nextTodoId = 0;

export const handleFromsData = (dispatch, key, value) => {
    dispatch({
        type : "UPDATE_FORM",
        data : {
            key,
            value
        }
    })
}

