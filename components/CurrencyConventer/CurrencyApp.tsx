import styles from '../../styles/Currency.module.scss';
import Head from 'next/head';
import { useEffect, useState, useRef } from 'react';
import CurrencyInput from './Currency_Block';
// import { Block } from '../CurrencyConventer/Currency_Block';

// function CurrencyApp () {
//   const ratesRef = useRef({});
//   const [error, setError] = useState('this is error');
//   const [fromCurrency, setFromCurency] = useState('UAH');
//   const [toCurrency, setToCurency] = useState('USD');
//   const [fromPrice, setFromPrice] = useState(0);
//   const [toPrice, setToPrice] = useState(1);

//   useEffect(() => {
//     let myHeaders = new Headers();
//     myHeaders.append("apikey", "FAcv47F7dQD4MpsMjh0Rwv8S9nnS2aBJ");
 
//     let requestOptions = {
//     method: 'GET',
//     redirect: 'follow',
//     headers: myHeaders
//     };

//   fetch("https://api.apilayer.com/fixer/latest?base=USD&symbols=UAH,USD,EUR,PLN", requestOptions)
//     .then(response => response.json())
//     .then(result => {
//       ratesRef.current= result.rates;
//       onChangeToPrice(1)
//       console.log(ratesRef.current)
//     })
//     .catch(error => {
//       setError(error)
//     });
//     },[])
  
//   const onChangeFromPrice = (value) => {
  
//     const price = value / ratesRef.current[fromCurrency];
//     const result = price / ratesRef.current[toCurrency]
    
//   setToPrice(result.toFixed(2))
//   setFromPrice(value)
   
//   }

// const onChangeToPrice = (value) => {
//    const result = (ratesRef.current[fromCurrency] / ratesRef.current[toCurrency]) * value;
  
//     setFromPrice(result.toFixed(2))
//     setToPrice(value)
//   }

//   useEffect(() => {
//     onChangeFromPrice(fromPrice)
//   }, [fromCurrency])
  
//   useEffect(() => {
//     onChangeToPrice(toPrice)
//   }, [toCurrency])
  
//   return (
//     <div className={styles.app}>
//       <Block
//         value = {fromPrice}
//         currency = {fromCurrency}
//         onChangeCurrency = {setFromCurency}
//         onChangeValue = {onChangeFromPrice}
//       />
//       <Block
//         value = {toPrice}
//         currency = {toCurrency}
//         onChangeCurrency = {setToCurency}
//         onChangeValue = {onChangeToPrice}
//       />
//     </div> 
//   )	
     
// }



function CurrencyApp() {
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState('UAH');
  const [currency2, setCurrency2] = useState('USD');
  const [rates, setRates] = useState([])
 
  useEffect(() => {
    let myHeaders = new Headers();
    myHeaders.append("apikey", "FAcv47F7dQD4MpsMjh0Rwv8S9nnS2aBJ");
 
    let requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };

    fetch("https://api.apilayer.com/fixer/latest?base=USD&symbols=UAH,USD,EUR,PLN,GBP", requestOptions)
      .then(response => response.json())
      .then(result => {
        setRates(result.rates);
        
      })
  }, [])

  useEffect(() => {
    if (!!rates) {
      handleAmount1Change(1)
    }
  },[rates])

  function handleAmount1Change(amount1){
    setAmount2(format(amount1*rates[currency2]/rates[currency1]))
    setAmount1(amount1)
  }

  function handleCurrency1Change(currency1){
    setAmount2(format(amount1*rates[currency2]/rates[currency1]))
    setCurrency1(currency1)
  }

  function handleAmount2Change(amount2){
    setAmount1(format(amount2*rates[currency1]/rates[currency2]))
    setAmount2(amount2)
  }

  function handleCurrency2Change(currency2){
    setAmount1(format(amount2*rates[currency1]/rates[currency2]))
    setCurrency2(currency2)
  }

  function format(number) {
    return number.toFixed(3)
  }
  return (
    <div className={styles.wrapper}>
      <h1>Currency Conventer</h1>
      <CurrencyInput
        onAmountChange={handleAmount1Change}
        onCurrencyChange={handleCurrency1Change}
        currencies={Object.keys(rates)}
        amount={amount1}
        currency={currency1} />
      <CurrencyInput
        onAmountChange={handleAmount2Change}
        onCurrencyChange={handleCurrency2Change}
        currencies={Object.keys(rates)}
        amount={amount2}
        currency={currency2} />
    </div>
  )
  

}
 export default CurrencyApp