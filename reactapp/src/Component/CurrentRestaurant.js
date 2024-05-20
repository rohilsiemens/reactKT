import { useState } from "react";
import { Link } from "react-router-dom";

export const CurrentRestaurant=(props)=>{
    const [currentNumber,setCurrentNumber]=useState(0);
    const {onData,restaurantDetails}=props;
    function fillData(){
        const len=restaurantDetails.length;
        if(currentNumber==len-1) setCurrentNumber(0);
        else setCurrentNumber(currentNumber+1);
        onData(restaurantDetails[currentNumber]);
    }    
    return(
        <Link to="/page1">
        <div className="child1">
        <button onClick={fillData}>Next Restaurant</button>
        </div>
        </Link>
        
    )
}