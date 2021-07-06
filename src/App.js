import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Addyou from "./components/Addyou";
import Addfav from "./components/Addfav"
import Card from './components/Cards';
import Displayall from './components/Displayall'
import Footer from "./components/Footer";
import { baseURL, config } from './services';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  const [poems, setPoems] = useState([])
  const [toggleFetch, setToggleFetch] =useState(true)
  
    useEffect(() => {
      const fetchData = async () => {
  
        const resp = await axios.get(baseURL, config);
        setPoems(resp.data.records)
        // console.log("poems", poems)
      }
      fetchData();
    }, [toggleFetch]);
    

    
  
    return (
      <div className="App">
        <Navbar />
        <Route exact path="/">
        <Home poems={poems} setToggleFetch={setToggleFetch}/>
        <div className="welcome">
        <p className="title">Welcome to the Quill Café where you can browse famous and unknown poets based on your mood.</p>
        <p>Add your favorite poem, browse the genres or add your own poetry creations.
        </p>
        <p>Let's connect, inspire and relish in the deliciousness of poetry.</p>
        </div>
        <Card setToggleFetch={setToggleFetch}/>
        </Route>
        <Route path="/mood/:mood">
        <Home poems={poems} setToggleFetch={setToggleFetch}/>
        </Route>
        <Route path="/newyou/">
          <Addyou poems={poems} setToggleFetch={setToggleFetch}/>
        </Route>
        <Route path="/newyou/:id">
        </Route>
        <Route path="/newfav/">
          <Addfav poems={poems} setToggleFetch={setToggleFetch}/>
        </Route>
        <Route path="/newfav/:id">
        </Route>
        <Route path="/displayall/">
          <Displayall poems={poems} setToggleFetch={setToggleFetch}/>
        </Route>
        <Footer />
      </div>
    );
  }
  


export default App;
