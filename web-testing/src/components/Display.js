import React from 'react';


export default function Display(props) {
   

    
    console.log(props);
   return (
       <div>
           Strikes: {props.strike}
           Balls: {props.ball}
          
       </div>
   )
}