import styles from '../../../styles/News/Article.module.scss';
import {useMemo, useState} from 'react';
import Link from 'next/link';
import { uuid } from 'uuidv4';

import { useSelector,useDispatch } from 'react-redux';
import { loadArticleAction } from '../../../store/actions/loadAction';

function Article(): JSX.Element {
	
	const [error, setError] = useState(null);
   const dispatch = useDispatch();
   const articles = useSelector((state) => state);
	
	useMemo(() => {
		dispatch(loadArticleAction());
   }, [dispatch]);

	let data = Object.values({articles })
   let newdata = data[0]


	if (error) {
	return <div>Error: {error.message}</div>
	} else {
		return (
			<>
				
				<div className={styles.news}>
					<h1>Latest world news:</h1>
					<ul>{newdata?.articles.map(({ link, title, id }) =>
						<li className={styles.link} key={uuid()}>
									<Link href={link}> ○ {title} </Link>
							</li>)}
					</ul> 
			</div>
			</>
		 
    )
 }
		

  
}
 export default Article