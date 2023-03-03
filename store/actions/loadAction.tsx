import { useDispatch } from "react-redux";

export const useNews = () => {
    const dispatch = useDispatch();

    const getNews = () => {
        fetch(
            "https://newsdata.io/api/1/news?apikey=pub_18143ad03942e04d52d8310f67f976dd4bde4&language=en",
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

export const setArticlesAction = (articles: Array<object>) => ({
    type: "SET_ARTICLES",
    payload: articles,
});
