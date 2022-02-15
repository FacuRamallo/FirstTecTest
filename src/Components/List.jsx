import { useEffect, useState } from "react";
import Card from "./Card";
import '../Styles/List.css';
import DataService from "../Services/DataService";




function List(props){
    const [data,setData]=useState(null)
    

    useEffect(()=>{
                    DataService.getPkemonsList(props.data)
                    .then(res=>{
                        console.log(res);
                        setData(res)
                    })  
    },[])
    
    return (
        <ul className="list">
            {data?data.map((el) => 
                {return(
                    <Card
                    id={el.id}
                    name={el.name}    
                    imgUrl={el.imgUrl}/>
                )}
            ):"Loading..."}
        </ul>);
}

export default List;