import { useEffect, useState } from "react";
import DataService from "../DataService";



function Card(props){
    const [img,setImg]=useState("")
    const [loading,setLoading]=useState(true)
    const [id,setId]=useState(null)
    
    useEffect(()=> 
    {   
        DataService.getImgSrc(props.pokemonUrl)    
                .then(res=>
                {   
                    setImg(res)
                    setLoading(false)
                })
    },[])

    return(
        <li key={id}>
            
                {loading?"Loading Image...":<img src={img}></img>} 
            
                <p>{props.name}</p>
            
        </li>
    )
}

export default Card;
