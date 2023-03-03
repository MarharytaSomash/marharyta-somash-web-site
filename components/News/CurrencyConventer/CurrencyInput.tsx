import styles from "../../../styles/News/Currency.module.scss";
import { v4 as uuidv4 } from "uuid";
interface Props {
    amount: number;
    currency: string;
    currencies: string[];
    onAmountChange: (amount: number) => void;
    onCurrencyChange: (currency: string) => void;
}

function CurrencyInput(props: Props): JSX.Element {
    const { amount, currency, currencies, onAmountChange, onCurrencyChange } = props;

    return (
        <div className={styles.group}>
            <input
                className={styles.input}
                type="number"
                value={isNaN(amount) ? "" : amount}
                onChange={(e) => onAmountChange(Number(e.target.value))}
            />

            <select
                className={styles.select}
                value={currency}
                onChange={(e) => onCurrencyChange(e.target.value)}
            >
                {currencies.map((currency: string) => (
                    <option value={currency} key={uuidv4()}>
                        {currency}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default CurrencyInput;
