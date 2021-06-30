import { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import Addyou from './components/Addyou'
import Home from "./components/Home";
import { baseURL, config } from './services';
import axios from "axios";
import './App.css';

function App() {
  const [poems, setPoems] = useState([])
  // const [toggleFetch, setToggleFetch] =useState(true)
  
    useEffect(() => {
      const fetchData = async () => {
  
        const resp = await axios.get(baseURL, config);
        setPoems(resp.data.records)
        // console.log("poems", poems)
      }
      fetchData();
    }, []);
    

    
  
    return (
      <div className="App">
        <Navbar />
        <Route exact path="/">
        <Home poems={poems} />

        </Route>
        <Route path="/mood/:mood">
        <Home poems={poems} />
        </Route>
        <Route path="/newyou"></Route>

      </div>
    );
  }
  


export default App;
