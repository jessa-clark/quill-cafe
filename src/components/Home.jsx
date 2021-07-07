import { useParams, NavLink } from "react-router-dom";
import Mood from "./Mood";
import { Button } from "react-bootstrap";
import { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

const Home = (props) => {
  const homeRef = useRef([0]);
  const params = useParams();
  console.log(props.poems, params);

  useEffect(() => {
    if (params.mood) {
      homeRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [params.mood]);

  const filteredMood = props.poems.filter(
    (poem) => poem.fields.mood === params.mood
  );
  /* take poems and reduce them into categories and current poem. if the categories does not include the current
  mood then create a new mood by pushing the categories to the render page and API. If it does match then send 
  it to the current category*/
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
            >
              {mood}
            </Button>
          </NavLink>
        ))}
      </div>
      <div ref={homeRef}>
        {filteredMood.map((poem) => (
          <div className="info" key={poem.id}>
            <Mood poem={poem} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
