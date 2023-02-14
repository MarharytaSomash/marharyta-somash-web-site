const LOAD_ARTICLE = "LOAD_ARTICLE";


const defaultState = {
    articles: []
}

const rootReducer =(state=defaultState, {type,payload}) => {
    switch(type) {
        case LOAD_ARTICLE: {
            return {articles:payload}
        }
        
        default: {
            return state
        }
    }
}
export default rootReducer