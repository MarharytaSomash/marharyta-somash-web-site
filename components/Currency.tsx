import styles from '../styles/Currency.module.scss'
import CurrencyApp from './CurrencyConventer/CurrencyApp';
import TableApp from './CurrencyTable/TableApp';

function Currency () {
	return (

		<div className={styles.currency}>
			<TableApp/>
			<CurrencyApp/>
		</div>
		
	)
	
}

export default Currency
