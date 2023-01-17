import { FC } from 'react';
import styles from '../styles/News/Currency.module.scss'
import CurrencyApp from './News/CurrencyConventer/CurrencyApp';
import Article from './News/Articles/Article';


const Currency:FC = () => {
	return (

		<div className={styles.currency}>
			<Article/>
			<CurrencyApp/>
		</div>
		
	)
	
}

export default Currency
