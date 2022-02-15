import { useState, useEffect } from 'react';
import './App.css';
import List from './Components/List';
import DataService from './Services/DataService';

function App() {
  const [data,setData]=useState(null);
  const [prev,setPrev]=useState();
  const [next,setNext]=useState();
  const [loading,setLoading] = useState(true); 
  
  useEffect(() => 
    {
      DataService.getData()
        .then(data =>
          {
            setData(data.results)
            setPrev(data.previous)
            setNext(data.next)
            setLoading(false);
          }
        )
    },[])
  
 
  
  return (
    <div className="App">

        {loading?"Loading List, please wait...":<List data={data}/>}
        <div>
            <a href={prev}>Next Page</a>
            <p>Showing ids a to a</p>
            <a href={next}>Prev Page</a>
        </div>
    </div>
  );
}

export default App;
