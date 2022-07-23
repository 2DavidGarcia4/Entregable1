import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'

function App() {
  // const posQ = Random(quotes)
  // const posC = Random(colors)
  // let [resQ, setCountQ] = useState(posQ)
  // let [resC, setCountC] = useState(posC)
  
  return (
    <div className="App">
      <QuoteBox />
    </div>
  )
}

export default App
