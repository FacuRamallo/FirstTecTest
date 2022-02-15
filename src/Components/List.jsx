import { useState } from "react";

import Card from "./Card";




function List(props){
    const [data]=useState(props.data)
        
    return (
        <ul>
            {data.map((el) => 
                {return(
                    <Card

                    pokemonUrl={el.url}

                    name={el.name}/>    
                )}
            )}
        </ul>);
}

export default List;