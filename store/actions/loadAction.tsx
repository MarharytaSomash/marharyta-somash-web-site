import { useDispatch } from "react-redux";

export const useNews = () => {
    const dispatch = useDispatch();

    const getNews = () => {
        fetch(
            "https://newsdata.io/api/1/news?apikey=pub_15737250ae4abe462e94fb9715944723e5a06&language=en",
        )
            .then((resp) => resp.json())
            .then((res) => res.results)
            .then((articles) => dispatch(setArticlesAction(articles)))
            .catch((error) => {
                console.error("Error loading articles", error);
            });
    };

    return { getNews };
};

export const setArticlesAction = (articles) => ({
    type: "SET_ARTICLES",
    payload: articles,
});
