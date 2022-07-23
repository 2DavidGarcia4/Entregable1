import React from "react";
function Random(array, pos){
   let bueltas = 1
   for(let c=0; c<bueltas; c++){
      let random = Math.floor(Math.random()*array.length)
      if(pos && random == pos){
         bueltas++
         // console.log("hoolaa")
      }else{
         return random
      }
   }
}

export default Random