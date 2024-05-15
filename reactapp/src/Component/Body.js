import './componentStyle.css';
import {useState,useEffect} from 'react'
import { ChildComponent1 } from './ChildComponent1';
import { ChildComponent2 } from './ChildComponent2';
import { restaurantsdetails } from '../Utilities/RestaurantDetails';
import { CurrentRestaurant } from './CurrentRestaurant';

export const Body=()=>{
    const [restaurantDetails,setRestaurantDetails]=useState(restaurantsdetails);
    const [restaurant,setRestaurant]=useState(restaurantsdetails[0]);
    useEffect(()=>{
        setRestaurantDetails(restaurantsdetails);
        console.log(restaurantDetails);
    },[])
    function handleDataFromChild(dataChild){
        setRestaurant(dataChild);
    }
    return(
        <div className="body">
        {
            restaurantDetails?restaurantDetails.map((restaurant)=>{
                 return <ChildComponent1 restaurant={restaurant} />
            }):null
        }
        <ChildComponent1 restaurant={restaurant}/>
        <CurrentRestaurant onData={handleDataFromChild} restaurantDetails={restaurantDetails}/>
        </div>
    )
}

