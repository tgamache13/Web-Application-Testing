import React from 'react';


export default function Display(props) {
   

    
    console.log(props);
   return (
       <div className="display">
        <div className="display-strikes">
           <p className="strike-label">Strikes: </p>
           <p className="strike-number">{props.strike} </p>
        </div>
        <div className="display-balls">
          <p className="ball-label"> Balls: </p>
          <p className="ball-number">{props.ball}</p>
        </div>
       </div>
   )
}