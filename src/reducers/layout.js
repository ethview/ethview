let initialState = [
    {
        name:"Welcome",
        size:"small"
    }
]

const layout = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_WIDGET':
            return [
                ...state,
                action.widget
            ]
        case 'CHANGE_WIDGET_ORDER':
            return state
        default:
            return state
    }
}

export default layout