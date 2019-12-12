import React, { useState } from 'react';
import Display from './Display';
import Inning from './Inning';

export default function Dashboard () {
    const [strike, setStrike] = useState(0);
    const [ball, setBall] = useState(0);
    const [foul, setFoul] = useState(0);
    const [hit, setHit] = useState(0);
    const [homer, setHomer] = useState(0);
    const [walk, setWalk] = useState(0);
    const [out, setOut] = useState(0);

    const Strike = e => {
        setStrike(strike + 1);
        StrikeOut(strike);
    };
    const StrikeOut = (strike) => {
        if(strike >= 2){
            setOut(out + 1);
        };
    }

    const Ball = e => {
        setBall(ball + 1);
        Walk(ball);
    };

    const Foul = e => {
        setFoul(foul + 1);
        if(strike < 2){
            setStrike(strike + 1)
        };
    };

    const Hit = e=> {
        setHit(hit + 1);
        setStrike(0);
        setBall(0);
    };

    const Homer = e => {
        setHomer(homer + 1);
    };

    const Walk = (ball) => {
        if(ball >= 3) {
            setWalk(walk + 1);
        };
    };

    console.log("Strikes=",strike, "Balls=",ball, "Fouls=",foul, "Hits=",hit, "Homer=", homer, "Walks", walk,"Outs=", out);
    return (
        <div>
            <Display strike={strike} ball={ball} foul={foul} hit={hit} homer={homer} walk={walk} out={out} />
            <button className="strike" onClick={Strike}>Strike</button>
            <button className="ball" onClick={Ball}>Ball</button>
            <button className="foul" onClick={Foul}>Foul</button>
            <button className="hit" onClick={Hit}>Hit</button>
            <button className="homer" onClick={Homer}>Homer</button>
        
            <Inning  />
        </div>
    );
}