import React,{ useState } from 'react';
import './App.css';

function App() {

 
  let [usdAUD,setUsdAUD] = useState(0);
  

  let [usdValueInput,SetUsdValueInput] = useState('');
 
 
  let [usdAUD_Value,setUsdAUD_Value] = useState(0);
  

  const fetchPrice = () => {
    fetch('https://open.er-api.com/v6/latest/USD')
    .then(result=>{
      return result.json();
    })
    .then(data=>{
      let useAUD = parseFloat(data.rates.AUD);
      setUsdAUD(usdAUD);
      setUsdAUD_Value(parseInt(usdValueInput | 0) * useAUD);

    })
    .catch(err=>{
      console.log(err);
    })
  }




  return (
    <div className="App">
    

    <div>
 
        <div><strong>{usdAUD_Value}</strong> <small> AUD</small></div>
      <input 
        type="number"
        value={usdValueInput} 
        onChange={e=>{SetUsdValueInput(e.target.value)}} 
        placeholder="Enter USD price..." 
      />
      <button onClick={fetchPrice}>Convert</button>
    </div>
  </div>
  );
}

export default App;
