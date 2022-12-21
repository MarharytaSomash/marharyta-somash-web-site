import styles from '../styles/Currency.module.scss';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { listenerCount } from 'process';


function Currency () {
	const [error, setError] = useState(null);
  const [items, setItems] = useState([]);
// "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json"

useEffect(() => {
	// fetch("http://data.fixer.io/api/latest?access_key=2CeeweDi7Re7Ab09mn7D6V4StlLm8sRb")
   //    .then(res => res.json())
   //    .then(
	// 		(result) => { console.log(result) },
	// 		// setItems(result)
   //      (error) => {setError(error)}
   //    )
	let myHeaders = new Headers();
myHeaders.append("apikey", "2CeeweDi7Re7Ab09mn7D6V4StlLm8sRb");

let requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch("https://api.apilayer.com/fixer/latest?base=USD&symbols=UAH,EUR,PLN", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
      }, [])
	
	if (error) {
    return <div>Error: {error.message}</div>;
  } else {
		return (
		 <>
				{/* <table>
					<thead>
						<tr>
							<th></th>
						</tr>
					</thead> */}
				{items.map(item => (
					// <key = {item.cc}>
				<table>
						<thead>
							<td>
								<th>{item.txt} </th>
							</td>
						</thead>
						</table>
							
								// {/* {item.exchangedate} 
								// {item.rate} 
								
								//  {item.cc}  */}
								
								
					))}
					
				{/* </table>  */}
				
		 </>
    );
	}
	
}

export default Currency
