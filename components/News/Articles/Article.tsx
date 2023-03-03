import styles from "../../../styles/News/Article.module.scss";
import { useMemo, useState } from "react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { useNews } from "../../../store/actions/loadAction";
import { RootState } from "../../../store/reducers/rootReducer";
interface ArticleData {
    articles: { link: string; title: string }[];
}
function Article(): JSX.Element {
    const [error] = useState<Error | null>(null);
    const articles = useSelector((state: RootState) => state);
    const { getNews } = useNews();

    useMemo(() => {
        getNews();
    }, []);

    const data: { article: ArticleData }[] = Object.values({ articles });
    const newdata = data[0].article.articles;

    if (error) {
        return <div>Error: news not found</div>;
    } else {
        return (
            <>
                <div className={styles.news}>
                    <h1>Latest world news:</h1>
                    <ul>
                        {newdata?.map(({ link, title }) => (
                            <li className={styles.link} key={uuidv4()}>
                                <Link href={link}> ○ {title} </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        );
    }
}
export default Article;
