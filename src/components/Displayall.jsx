import { useState } from "react";
import Mood from "./Mood"

function Displayall(props) {
  const [mood, setMood] = useState("");


  const filteredMood = props.poems.filter(
    (poem) => poem.fields.mood.includes(mood)
  );

  return (
    <div className="display-all">
      <form>
          <select 
          className="down"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          >
            <option id="item" value="dropdown">Select Mood</option>
            <option value="humorous">humorous</option>
            <option value="whimsical">whimsical</option>
            <option value="inspired">inspired</option>
            <option value="reflective">reflective</option>
            <option value="idyllic">idyllic</option>
            <option value="romantic">romantic</option>
            <option value="sassy">sassy</option>
            <option value="melancholy">melancholy</option>
          </select>
          </form>
      {filteredMood.map((poem) => (
        <div className="info" key={poem.id}>
          <Mood poem={poem} />
        </div>
        
      ))}
          
  </div>


  );
}

export default Displayall;
