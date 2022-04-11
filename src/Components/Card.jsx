import '../Styles/Card.css';

function Card(props){

    return(
        <li >
            {
                props.imgUrl?
                    <div>
                        <img src={props.imgUrl} alt="Pokemon Img"/>
                        <p>{props.name}</p>
                    </div>
                :
                "Loading..."
            } 
        </li>
    )
}

export default Card;
