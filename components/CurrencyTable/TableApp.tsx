// import styles from '../../styles/Currency.module.scss';
import { useEffect, useState } from 'react';
import Table from './Table';


function TableApp() {
 const [rates, setRates] = useState();
	const [error, setError] = useState();
 
useEffect(() => {
	
	let myHeaders = new Headers();
   myHeaders.append("apikey", "LhRH3O8Yl8d33o05yjaQ7Tl80Kgnufmq");

	let requestOptions = {
	method: 'GET',
	// redirect: 'follow',
	headers: myHeaders,
	};

	fetch("https://api.apilayer.com/fixer/latest?base=USD&symbols=UAH,USD,EUR,PLN", requestOptions)
	.then(response => response.json())
	.then(result => setRates(result))
	
	
}, [])
	
console.log(rates)
	
	if (error) {
    return <div> This is error...</div>;
  } else {
		return (
		 <>
			<Table rates={rates}/>		

		 </>
    );
	}
  
}
 export default TableApp