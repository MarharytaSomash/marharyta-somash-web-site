
import styles from '../../styles/Currency.module.scss';

function CurrencyInput ( props:any) {
   const { amount, currency, currencies, onAmountChange, onCurrencyChange } = props;
   return (
      <div className={styles.group}>
        
         <input className={styles.input}
            type="number"
            value={amount}
            onChange={e => onAmountChange(e.target.value)} />
        
         <select className={styles.select}
            value={currency}
            onChange={e => onCurrencyChange(e.target.value)}>
              
               {currencies.map((currency:string) => (
                  <option value={currency}> {currency}</option>
                  
               ))}
         </select>
         
      </div>
      
   )
}
export default CurrencyInput;