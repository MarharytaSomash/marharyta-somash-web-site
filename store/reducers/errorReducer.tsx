const LOAD_ARTICLE_ERROR = "LOAD_ARTICLE_ERROR";


const defaultState = {
        error: null,
      
}

const errorReducer =(state=defaultState, {type,payload}) => {
    
    switch (type) {
        case LOAD_ARTICLE_ERROR: {
            return {error:payload}
        }
        
        default: {
            return state
        }
    }
}
export default errorReducer