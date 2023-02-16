const LOAD_ARTICLE = "LOAD_ARTICLE";


const defaultState = {
        articles: [],
      
}

const articleLoadReducer =(state=defaultState, {type,payload}) => {
    
    switch (type) {
        case LOAD_ARTICLE: {
            return {articles:payload}
        }
        
        default: {
            return state
        }
    }
}
export default articleLoadReducer 