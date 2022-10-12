import React,{useState} from 'react';
import "./main.css"

function Shop() {
  const [state,setState]=useState(false);
  let url="https://shop.artic.edu/?gclid=CjwKCAjwqJSaBhBUEiwAg5W9p8e4yQROtBbJCQ6cce_AMI8sHYj_3aU3GAyvZ65ZlFDUMVBE53P75hoC-WUQAvD_BwE";
  return (
    <div className="shopLink" pl={7}>
     <h2>Visit the Chicago Art Institute Store <a href={url}>Here!</a>
     </h2>
    </div>
  );
}

export default Shop;