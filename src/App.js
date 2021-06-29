import { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import Mood from './components/Mood';
import { baseURL, config } from './services';
import axios from "axios";
import './App.css';

function App() {
const [poems, setPoems] = useState([])


  useEffect(() => {
    const fetchData = async () => {

      const resp = await axios.get(baseURL, config);
      setPoems(resp.data.records)
    }
    fetchData();
  }, []);

  useEffect(() => {
    poems.reduce((categories, current) => {
      if (!categories.includes(current.mood)) {
      categories.push(current.mood)
      console.log(categories)
      }
      return categories
      }, [])
  })


  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">

      <main>
      <Mood poems={poems}/>
      <button>Melancholy</button>
      <button>Romantic</button>
      <button>Sassy</button>
      <button>Whimsical</button>
      <button>Reflective</button>
      <button>Inspired</button>
      <button>Humorous</button>
      <button>Idyllic</button>
      </main>
      </Route>
    </div>
  );
}

export default App;
