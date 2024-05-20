import { useRouteError } from "react-router-dom";

export const Error=()=>{
    const errorElement=useRouteError();
    console.log(errorElement);
    return (
        <>
        <h5>{errorElement.data}</h5>
        <h5>{errorElement.status}</h5>
        </>       
    )
}