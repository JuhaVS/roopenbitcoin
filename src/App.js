import axios from 'axios'
import React, { useState } from 'react'
import Bearish from './components/Bearish'
import Highest from './components/Highest'
import Timetravel from './components/Timetravel'
import './App.css'

function App() {

  const [date1, setDate1] = useState('') 
  const [date2, setDate2] = useState('') 
  const [data, setData] = useState([])
  const [n, setN] = useState('') 
  const [m, setM] = useState('') 


  const handleDate1Change = (event) => {
    setDate1(event.target.value)
  }

  const handleDate2Change = (event) => {
    setDate2(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();


    let a = new Date(date1).getTime() / 1000 
    let b = new Date(date2).getTime() / 1000 + 7200
    setN(a)
    setM(b)

    // Haetaan tiedot päivämäärien perusteella

    const url= 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=eur&from=' + a + '&to=' + b 

    axios
    .get(url)
    .then(response => {
      setData(response.data)
    })

 } 

  return (
    <div>
    <div id="search">
    <h3>Dates</h3>

      <form onSubmit={handleSubmit}>
        From
        <input type="date" class="dates" 
          value={date1}
          onChange={handleDate1Change}
        />
         
         To
        <input type="date" class="dates" 
          value={date2}
          onChange={handleDate2Change}
        />
        
        <button type="submit">Search</button>
      </form> 
      </div>
      <div id="results"> 
      <h3>How many days is the longest bearish (downward) trend within a given date range?</h3>

      <Bearish data = {data} m = {m} n = {n}/>

      <h3>Which date within a given date range had the highest trading volume?</h3>

      <Highest data = {data} m = {m} n = {n}/>

      <h3>Time travel</h3>

      <Timetravel data = {data}/>
    </div>
    </div>
  )

}
export default App;
