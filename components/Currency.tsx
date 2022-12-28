import { FC } from 'react';
import styles from '../styles/Currency.module.scss'
import CurrencyApp from './CurrencyConventer/CurrencyApp';
import TableApp from './CurrencyTable/TableApp';

const Currency:FC = () => {
	return (

		<div className={styles.currency}>
			<TableApp/>
			<CurrencyApp/>
		</div>
		
	)
	
}

export default Currency
