
export const loadArticleAction = () => {
    
    return (dispatch) => {

            fetch('https://newsdata.io/api/1/news?apikey=pub_15737250ae4abe462e94fb9715944723e5a06&language=en')
                 .then(resp => resp.json())
                 .then(res =>res.results)
                 .then(articles => dispatch({ type: "LOAD_ARTICLE", payload: articles }))
                 .catch(error => {
                        dispatch({ type: "LOAD_ARTICLE_ERROR", payload: error.message })
                })
            
    }
}
