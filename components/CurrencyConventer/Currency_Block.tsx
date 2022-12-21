import styles from '../../styles/Currency.module.scss';

// const defaultCurrencies = ['UAH', 'USD', 'EUR','PLN'];
// export const Block = ({ value, currency, onChangeValue, onChangeCurrency }) => (
//    <div className={styles.block}>
//       <ul className={styles.currencies}>
//           {defaultCurrencies.map((cur) => (
//             <li
//                onClick={() => onChangeCurrency(cur)}
//                className={currency === cur ? 'active' : ''}
//                key={cur}>
//                {cur}
//             </li>
//       ))}    
//       </ul>
      
//       <input 
//          onChange={(e) => onChangeValue(e.target.value)}
//          value={value}
//          type="number"
//          placeholder={0}
//       />
//   </div>
// );

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