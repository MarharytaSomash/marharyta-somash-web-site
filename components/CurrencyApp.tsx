import styles from '../styles/Currency.module.scss';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Block } from './Currency';

function CurrencyApp () {
  const [newrate, setRate] = useState({});
  const [fromCurrency, setFromCurency] = useState('UAH');
  const [toCurrency, setToCurency] = useState('USD');
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(0);

  useEffect(() => {
   fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json')
      .then((response) => response.json())
      .then((data) => {
        
        let newrate = data.map(el => { el.rate })
        setRate(newrate)
        console.log(newrate)
        let nameofcur=   data.map(el => el.cc)

       
      }).catch(err => { alert('data not found ... ') })
  }, [])
  
  const onChangeFromPrice = (value) => {
    const price = value / newrate[fromCurrency];
    const result = price / newrate[toCurrency]
    console.log( price )
    setFromPrice(value)
    setToPrice(result)
  }

  const onChangeToPrice = (value) => {
   
    setToPrice(value)
  }


  return (

    <div className="styles.app">
      <Block
        value={fromPrice}
        currency={fromCurrency}
        onChangeCurrency={setFromCurency}
        onChangeValue={onChangeFromPrice}
      />
      <Block
        value={toPrice}
        currency={toCurrency}
        onChangeCurrency={setToCurency}
        onChangeValue={onChangeToPrice}
      />
    </div> 
  )
	
	
			
     
}

export default CurrencyApp

