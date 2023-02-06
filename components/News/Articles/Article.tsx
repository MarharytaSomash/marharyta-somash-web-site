import styles from '../../../styles/News/Article.module.scss';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';


function Article(): JSX.Element {
	const [article, setArticle] = useState();
	const [error, setError] = useState(null);
  
	useEffect(() => {

		const dataFetch = async () => {
	 
			const article = await (
				await fetch("https://newsdata.io/api/1/news?apikey=pub_15737250ae4abe462e94fb9715944723e5a06&language=en")
					.then(response => response.json())
					.then(res => setArticle(res.results))
					.catch(error =>  setError(error))
	)
 	
      
	}

    dataFetch();
  }, []);
	
	let arr = Object.values({ article })
	let newarr = arr[0]
	if (error) {
	return <div>Error: {error.message}</div>
	} else {
		return (
			<>
			   
				<div className={styles.news}>
					<h1>Latest world news:</h1>
					<ul>{newarr?.map(({ link, title, source_id}) =>
						<li className={styles.link} key={source_id}>
									<Link href={link}> ○ {title} </Link>
							</li>)}
					</ul>
			</div>
			</>
		 
    )
}
		

  
}
 export default Article