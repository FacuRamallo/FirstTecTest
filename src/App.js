import { useState, useEffect } from 'react';
import './App.css';
import List from './Components/List';
import DataService from './DataService';

function App() {
  const [data,setData]=useState();
  const [prev,setPrev]=useState('')
  const [next,setNext]=useState('') 
  
  useEffect(() => {DataService.get()
            .then(res => setData(res.results))
            },[])
  
  return (
    <div className="App">
        {console.log(data)}
        <List data={data}/>
        <div>
            <a href={prev}>Next Page</a>
            <p>Showing ids a to a</p>
            <a href={next}>Prev Page</a>
        </div>
    </div>
  );
}

export default App;
