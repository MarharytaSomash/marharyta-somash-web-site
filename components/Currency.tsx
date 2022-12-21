import styles from '../styles/Currency.module.scss';
import Head from 'next/head';
import { useEffect, useState ,useRef} from 'react';
import CurrencyApp from './CurrencyConventer/CurrencyApp';
import { Block } from './CurrencyConventer/Currency_Block';

function Currency () {
	const [error, setError] = useState(null);
  const itemsRef= useRef([]);
// "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json"

// useEffect(() => {
// 	fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json")
//       .then(res => res.json())
//       .then(
//         (result) => {setItems(result)},
//         (error) => {setError(error)}
//       )
// }, [])
	
	
useEffect(() => {
	
	let myHeaders = new Headers();
   myHeaders.append("apikey", "2CeeweDi7Re7Ab09mn7D6V4StlLm8sRb");

	let requestOptions = {
	method: 'GET',
	redirect: 'follow',
	headers: myHeaders
	};

	fetch("https://api.apilayer.com/fixer/latest?base=USD&symbols=UAH,USD,EUR,PLN", requestOptions)
	.then(response => response.json())
	.then(result => itemsRef.current[result.rates])
	.catch(error => {setError(error)});
	
}, [])
	
	
	if (error) {
    return <div>Error: {error.message}</div>;
  } else {
		return (
		 <>
				<ul>
					<li>
						{itemsRef.current}
					</li>
					
				</ul> 
				<CurrencyApp />	
		 </>
    );
	}
	
}

export default Currency



