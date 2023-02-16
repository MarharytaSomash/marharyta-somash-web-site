const TOGGLE_MENU = "TOGGLE_MENU"

const defaultState = {
        toggle: false
}

const showMenuReducer =(state=defaultState, {type}) => {

    switch (type) {
        
        case TOGGLE_MENU: {
            return {
                ...state,
                toggle: !state.toggle,
            }
        }
        default: {
            return state.toggle
        }
            
    }
}
export default showMenuReducer