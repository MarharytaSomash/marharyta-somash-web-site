import styles from "../../../styles/News/Currency.module.scss";
import { useState, useMemo, useEffect } from "react";
import CurrencyInput from "./CurrencyInput";
import AnimationTitle from "../../shared/animationTitle";
interface Rates {
    [key: string]: number;
}

function CurrencyApp(): JSX.Element {
    const [amount1, setAmount1] = useState<number>(100);
    const [amount2, setAmount2] = useState<number>(1);
    const [currency1, setCurrency1] = useState<string>("USD");
    const [currency2, setCurrency2] = useState<string>("UAH");
    const [rates, setRates] = useState<Rates>({});
    const [error, setError] = useState<Error | null>(null);

    useMemo(() => {
        const myHeaders = new Headers();
        myHeaders.append("apikey", "Uf2r5iCXC7khVdg1oMkq1juhLPCxsYHw");

        const requestOptions: RequestInit = {
            method: "GET",
            headers: myHeaders,
        };

        fetch(
            "https://api.apilayer.com/fixer/latest?base=USD&symbols=UAH,USD,EUR,PLN,GBP",
            requestOptions,
        )
            .then((response) => response.json())
            .then((result) => {
                setRates(result.rates);
            })
            .catch((error) => setError(error));
    }, []);

    const date = new Date().toLocaleDateString();

    useEffect(() => {
        if (rates) {
            handleAmount1Change(100);
        }
    }, [rates, handleAmount1Change]);

    function handleAmount1Change(amount1: number): void {
        setAmount2(Number(format((Number(amount1) * rates[currency2]) / rates[currency1])));
        setAmount1(Number(amount1));
    }

    function handleCurrency1Change(currency1: string): void {
        setAmount2(Number(format((amount1 * rates[currency2]) / rates[currency1])));
        setCurrency1(currency1);
    }

    function handleAmount2Change(amount2: number): void {
        setAmount1(Number(format((Number(amount2) * rates[currency1]) / rates[currency2])));
        setAmount2(Number(amount2));
    }

    function handleCurrency2Change(currency2: string): void {
        setAmount1(Number(format((amount2 * rates[currency1]) / rates[currency2])));
        setCurrency2(currency2);
    }

    function format(number: number): string {
        return number.toFixed(2);
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    } else {
        return (
            <>
                <div className={styles.wrapper}>
                    <AnimationTitle title="Currency Conventer" />
                    <h2 className={styles.title}>Course on {date}</h2>
                    <CurrencyInput
                        onAmountChange={handleAmount1Change}
                        onCurrencyChange={handleCurrency1Change}
                        currencies={Object.keys(rates)}
                        amount={amount1}
                        currency={currency1}
                    />
                    <CurrencyInput
                        onAmountChange={handleAmount2Change}
                        onCurrencyChange={handleCurrency2Change}
                        currencies={Object.keys(rates)}
                        amount={amount2}
                        currency={currency2}
                    />
                </div>
            </>
        );
    }
}

export default CurrencyApp;
