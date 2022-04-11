import { useEffect, useState } from "react";
import Card from "./Card";
import '../Styles/List.css';
import DataService from "../Services/DataService";


function List(props){
    const [data,setData]=useState(props.data)

    useEffect(()=>{
        DataService.getPkemonsList(data)
        .then(res=>{
            console.log(res);
            setData(res)
            props.setLoading(false);
        })  
    },[])

    console.log(props.data)

    return (
        <ul className="list">
        {
                data.map((el, index) => 
                    <Card
                        id={el.id}
                        name={el.name}    
                        imgUrl={el.imgUrl}
                        key={index}
                    />
                )
            
        }
        </ul>
    );
}

export default List;