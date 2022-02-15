import { useState } from "react";
import Card from "./Card";
import '../Styles/List.css';




function List(props){
    const [data]=useState(props.data)
        
    return (
        <ul className="list">
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