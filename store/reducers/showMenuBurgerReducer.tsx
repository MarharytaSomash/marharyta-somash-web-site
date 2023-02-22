const TOGGLE_MENU = "TOGGLE_MENU"

const defaultState = {
        toggle: false
}

const showMenuReducer = (state = defaultState, { type,payload}) => {
    // console.log({ payload })
    switch (type) {
        
        case TOGGLE_MENU: {
            return {
                ...state,
                toggle:!payload
               
            }
        }
        default: {
            return state
        }
            
    }
}
export default showMenuReducer

