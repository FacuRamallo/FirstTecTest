import { useState, useEffect } from 'react';
import './App.css';
import List from './Components/List';
import Global from './Global';
import DataService from './Services/DataService';
import './Styles/reset.css';

function App() {
  const [data,setData]=useState();
  const [urlToFetch, setUrlToFetch] = useState(Global.appUrl)
  const [prev,setPrev]=useState("");
  const [next,setNext]=useState("");
  const [loading,setLoading] = useState(true); 
  
  useEffect(() => 
    {
      DataService.getDataUrlParam(urlToFetch)
        .then(dataFetch =>
          {
            setData(dataFetch.results)
            setPrev(dataFetch.previous? dataFetch.previous : Global.appUrl)
            setNext(dataFetch.next)
            setLoading(false);
            // console.log(dataFetch.previous, "useEffect")
            // console.log(urlToFetch)
            // console.log(dataFetch.next, "useEffect")
            // console.log(data)
          }
          )
    },[urlToFetch])

    const nextPage = () => {
      setUrlToFetch(next)
      setLoading(true)
      console.log(next)
    }

    const prevPage = () => {
      setUrlToFetch(prev)
      setLoading(true)
    }
    
  return (
    <div className="App">
        {/* {console.log(data)} */}
        <div>
            <button onClick={ () => nextPage() } >Next Page</button>
            <p>Showing ids a to a</p>
            <button onClick={ () => prevPage() }>Prev Page</button>
        </div>

        {
          loading?
          "Loading List, please wait..."
          :
          <List data={data} setLoading={setLoading}/>
        }
        
        <div>
            <button onClick={ () => nextPage() } >Next Page</button>
            <p>Showing ids a to a</p>
            <button onClick={ () => prevPage() }>Prev Page</button>
        </div>
    </div>
  );
}

export default App;
