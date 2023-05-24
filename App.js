import React, { useState } from "react";
import img from './sasuke.png'
import'./App.css'
 import Product from "./Product";
 
function App() {
  const [value,setValue]=useState({img});
      const data=[{'id':1,'name':'bilmola','price':"Rs:15000",'image':img},{'id':2,'name':'bilmola','price':"Rs:15000",'image':img,},{'id':3,'price':"Rs:15000",'name':'bilmola','price':"Rs:15000",'image':img},{'id':3,'price':"Rs:15000",'name':'bilmola','price':"Rs:15000",'image':img}];
  return(
    <section>
      {data.map((product)=>{
        const{id,p}=product;
        return   <><Product key={id} button={<button>click me</button>}  pro={product}/>
        </>
      })}

  </section>
  )
}
export default App;
