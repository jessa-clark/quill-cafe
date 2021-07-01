import { useParams, NavLink, } from "react-router-dom";
import Mood from "./Mood";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './Home.css'

const Home = (props) => { 
  const params = useParams();
  console.log(props.poems, params);
  const filteredMood = props.poems.filter(
    (poem) => poem.fields.mood === params.mood
  );
  
  const moods = props.poems.reduce((categories, current) => {
    if (!categories.includes(current.fields.mood)) {
      categories.push(current.fields.mood);
    }
    return categories;
  }, []);

  return (
    <div className="infoContainer">
      <p className="question">What's your mood?</p>
      <div className="buttonContainer">
      {moods.map((mood) => (
        <NavLink to={`/mood/${mood}`}>
          <Button
          variant="primary"
          className="custom-btn"
          align="center" 
          type="submit" 
          id={mood}
          value={mood}
          >{mood}</Button>
          </NavLink>
      ))}
      </div>
      {filteredMood.map((poem) => (
        <div className="info"
        key={poem.id}>
          <Mood poem={poem} />
        </div>
  
      ))}
    </div>
  );
};

export default Home;
