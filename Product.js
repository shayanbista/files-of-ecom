import React from 'react'
import './product.css'
export default function Product(props) {
  const{name,image,price}=props.pro;

  return (
    <>
    <section id="prod">
     <img src={image} alt="" />
     <h2>{name}</h2>
     <p>1234</p>
     <h3>{price}</h3>
     <button>Add To Cart</button>
     </section>
      
    
   
</>

)}

