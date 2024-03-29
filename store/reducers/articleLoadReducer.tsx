import { Action } from "../../components/types";
const SET_ARTICLES = "SET_ARTICLES";

const defaultState = {
    articles: [],
};

const articleLoadReducer = (state = defaultState, { type, payload }: Action) => {
    switch (type) {
        case SET_ARTICLES: {
            return { articles: payload };
        }

        default: {
            return state;
        }
    }
};
export default articleLoadReducer;
