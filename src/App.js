import React,{ useState } from 'react';
import './App.css';

function App() {

 
  let [usdEUR,setUsdEUR] = useState(0);
  let [usdJPY,setUsdJPY] = useState(0);
  let [usdGBP,setUsdGBP] =  useState(0);
  let [usdAUD,setUsdAUD] = useState(0);

  let [usdValueInput,SetUsdValueInput] = useState('');
 
 
  let [usdEUR_Value,setUsdEUR_Value] = useState(0);
  let [usdJPY_Value,setUsdJPY_Value] = useState(0);
  let [usdGBP_Value,setUsdGBP_Value] =  useState(0);
  let [usdAUD_Value,setUsdAUD_Value] = useState(0);


  const fetchPrice = () => {
    fetch('https://open.er-api.com/v6/latest/USD')
    .then(result=>{
      return result.json();
    })
    .then(data=>{
      let useEUR = parseFloat(data.rates.EUR);
      let useJPY = parseFloat(data.rates.JPY);
      let useGBP = parseFloat(data.rates.GBP);
      let useAUD = parseFloat(data.rates.AUD);

      setUsdEUR(usdEUR);
      setUsdGBP(usdGBP);
      setUsdJPY(usdJPY);
      setUsdAUD(usdAUD);
      
      setUsdEUR_Value(parseInt(usdValueInput | 0) * useEUR);
      setUsdGBP_Value(parseInt(usdValueInput | 0) * useGBP);
      setUsdJPY_Value(parseInt(usdValueInput | 0) * useJPY);
      setUsdAUD_Value(parseInt(usdValueInput | 0) * useAUD);


    })
    .catch(err=>{
      console.log(err);
    })
  }




  return (
    <div className="App">
    <div className="container">
      <div className="price-output"><strong>{usdAUD_Value}</strong> <small> AUD</small></div>
      <div className="price-output"><strong>{usdGBP_Value}</strong> <small> GBP</small></div>
      <div className="price-output"><strong>{usdJPY_Value}</strong> <small> JPY</small></div>
      <div className="price-output"><strong>{usdEUR_Value}</strong> <small> EUR</small></div>

      <input className="price-input"
        type="number"
        value={usdValueInput} 
        onChange={e=>{SetUsdValueInput(e.target.value)}} 
        placeholder="Enter USD price..." 
      />
      <button className="btn-convert" onClick={fetchPrice}>Convert</button>
    </div>
  </div>
  );
}

export default App;
