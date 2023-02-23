const TOGGLE_MENU = "TOGGLE_MENU"
export interface ShowMenuState {
  toggle: boolean;
}

const defaultState:ShowMenuState = {
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

