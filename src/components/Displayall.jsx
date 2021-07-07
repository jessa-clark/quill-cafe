import { useState } from "react";
import Mood from "./Mood"

function Displayall(props) {
  const [mood, setMood] = useState("");

  /* filter through poems and pull out the mood category. Search for and include all moods */
  const filteredMood = props.poems.filter(
    (poem) => poem.fields.mood.includes(mood)
  );

  return (
    <div className="display-all">
        {/* drop-dowm menu with value of mood. When mood is selected give it the value of selection */}
      <div className="browse">
        <h2 className="browseall">Browse all.</h2>
        <p className="sip">Browse all submitted poetry. Sort by mood. Find your new favorite poet or revisit an old one. Relax, sip and enjoy!</p>
      </div>
      
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
          {/* map through moods according to mood selected and pull poems associated with that mood.
          Render those poems to the page */}
      {filteredMood.map((poem) => (
        <div className="info" key={poem.id}>
          <Mood poem={poem} />
        </div>
        
      ))}
          
  </div>


  );
}

export default Displayall;
