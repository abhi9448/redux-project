const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
};

const formData = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_FORM':
            return {
                ...state,
                [action.data.key]: action.data.value
            }
        default:
            return state
    }
}
export default formData