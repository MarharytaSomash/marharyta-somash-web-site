import styles from '../../styles/Currency.module.scss';

function CurrencyInput(props) {
   return (
      <div className={styles.group}>
        
         <input className={styles.input}
            type="number"
            value={props.amount}
            onChange={e => props.onAmountChange(e.target.value)} />
        
         <select className={styles.select}
            value={props.currency}
            onChange={e => props.onCurrencyChange(e.target.value)}>
              
               {props.currencies.map((currency) => (
               <option value={currency}> {currency}</option>
               ))}
         </select>
         
      </div>
      
   )
}
export default CurrencyInput;