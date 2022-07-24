import React from "react";
import { useState } from 'react';
import Random from "./Random";
import quotes from "../quotes.json";
let colors = ["#F47340", "#EF2F88", "#ac43f2", "#f8cb58", "#4700D8", "#211717", "#7c3316", "#d45806", "#F9CE00", "#00818A", "#b10303", "#318a65", "#1FA8CF", "#32FF6A", "#AD8B73", "#1D0251", "#E11D74", "#6ea009", "#A287F4", "#E71414"]

function QuoteBox(){
   const posQ = Random(quotes), posC = Random(colors)
   let [resQ, setCountQ] = useState(posQ)
   let [resC, setCountC] = useState(posC)
   const quote = quotes[resQ], color = colors[resC]
   return (
      <div className="QuoteBox" style={{backgroundColor: color}}>
        <div className="quote">
            <div className="texto" style={{color: color}}>
               <i className="bi bi-quote"></i>
               <p>{quote.quote}</p>
            </div>
            <div className="footer" style={{color: color}}>
               <p>{quote.author}</p>
               <button onClick={()=> {setCountQ(resQ = Random(quotes, resQ)), setCountC(resC = Random(colors, resC))}} style={{backgroundColor: color}}><i className="bi bi-chevron-right"></i></button>
            </div>
        </div>
      </div>
   )
}

export default QuoteBox