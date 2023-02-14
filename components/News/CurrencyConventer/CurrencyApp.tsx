import styles from '../../../styles/News/Currency.module.scss';
import { useEffect, useState,FC} from 'react';
import CurrencyInput from './CurrencyInput';
import { useSpring, animated } from '@react-spring/web';

function CurrencyApp(){
  const [amount1, setAmount1] = useState(100);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState('USD');
  const [currency2, setCurrency2] = useState('UAH');
  const [rates, setRates] = useState([]);
  const [state, toggle] = useState(true);
  const [error, setError] = useState(null);
  const { x } = useSpring({
        from: { x: 0 },
        x: state ? 1 : 0,
        config: { duration: 1000 },
      })
  
  
  useEffect(() => {
    
    let myHeaders = new Headers();
    myHeaders.append("apikey", "Z6pPDHL9tiDZ4Ixcij0jkqIdNws2QaQb");
 
    let requestOptions = {
      method: 'GET',
      headers: myHeaders
    };

    fetch("https://api.apilayer.com/fixer/latest?base=USD&symbols=UAH,USD,EUR,PLN,GBP", requestOptions)
      .then(response => response.json())
      .then(result => { setRates(result.rates) })
      .catch(error =>  setError(error))
  }, [])


let date =  new Date().toLocaleDateString()

  useEffect(() => {
    if (!!rates) {
      handleAmount1Change(100)
    }
  },[rates])

  function handleAmount1Change(amount1:number):void{
    setAmount2(format(amount1*rates[currency2]/rates[currency1]))
    setAmount1(amount1)
   
  }

  function handleCurrency1Change(currency1:string):void{
    setAmount2(format(amount1*rates[currency2]/rates[currency1]))
    setCurrency1(currency1)
  
  }

  function handleAmount2Change(amount2:number):void{
    setAmount1(format(amount2*rates[currency1]/rates[currency2]))
    setAmount2(amount2)
  }

  function handleCurrency2Change(currency2:string):void{
    setAmount1(format(amount2*rates[currency1]/rates[currency2]))
    setCurrency2(currency2)
  }

  function format(number:any):any{
    return number.toFixed(2)
  }

  if (error) {
    return <div>Error: {error.message}</div>
  } else {
   
    return (
      
      <>
          <div className={styles.wrapper}>
            
            <animated.h2
              onMouseMove={() => toggle(!state)}
              style={{
                scale: x.to({
                  range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                  output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                })
              }}
            >
              Currency Conventer
              </animated.h2>
              <h1 className={styles.title}>Course on {date}</h1>
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
      </>
       
  
    )
  
  }
}
export default CurrencyApp
