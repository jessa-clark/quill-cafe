import { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import Mood from './components/Mood';
import { baseURL, config } from './services';
import axios from "axios";
import './App.css';

function App() {
  const [poems, setPoems] = useState([])
  const [filteredMood, setFilteredMood] =useState(null)
  
    useEffect(() => {
      const fetchData = async () => {
  
        const resp = await axios.get(baseURL, config);
        setPoems(resp.data.records)
        // console.log("poems", poems)
      }
      fetchData();
    }, []);
    
    const melancholy = poems.filter(poem => poem.fields.mood === "melancholy")
    function showMelancholy(){
      setFilteredMood(melancholy)
    }
  
    return (
      <div className="App">
        <Navbar />
        <Route exact path="/">
  
        <main>
          {filteredMood && filteredMood.map((poem) => (
            <div key={poem.id}>
              <Mood poem={poem}/>
            </div>
          ))}
        <button onClick={() => showMelancholy()}>Melancholy</button>
        <button>Romantic</button>
        <button>Sassy</button>
        <button>Whimsical</button>
        <button>Reflective</button>
        <button>Inspired</button>
        <button>Humorous</button>
        <button>Idyllic</button>
        </main>
        </Route>
        <Route path="/mood/:id">
          
        </Route>
      </div>
    );
  }
  


export default App;
