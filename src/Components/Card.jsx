
import '../Styles/Card.css';

function Card(props){
    
    
    return(
        <li key={`${props.id}`} id={props.id}>
            
                <img src={props.imgUrl} alt="Pokemon Img"></img>
            
                <p>{props.name}</p>
            
        </li>
    )
}

export default Card;
