import { useParams, Link } from "react-router-dom";
import Mood from "./Mood";
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
    <main>
      {filteredMood.map((poem) => (
        <div key={poem.id}>
          <Mood poem={poem} />
        </div>
      ))}
      <div className="buttonContainer">
      {moods.map((mood) => (
        <Link to={`/mood/${mood}`}>
          <button id={mood}>{mood}</button></Link>
      ))}
      </div>
    </main>
  );
};

export default Home;
