export const ChildComponent1=(props)=>{
    const {name,costForTwoString,avgRating,cuisines}=props.restaurant;
    console.log(props.restaurant);
    return(
        <div className="child1" >
           <h5>{name}</h5>
           <p>{costForTwoString}</p>
           <p>{avgRating}</p>
           {
            cuisines.map((cuisine)=>{
                return <p>{cuisine}</p>
            })
           }
        </div>  
    )
}