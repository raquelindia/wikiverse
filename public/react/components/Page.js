import React from 'react';
import {App} from "./App";

export const Page = (props) => {

  return <>
  
    <h3><button onClick = {handleClick} className="article-link">{props.page.title}</button></h3>
    
  </>
  
} 
	