import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { baseURL, config } from "../services";
import './Addfav.css'

function Addfav(props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [poem, setPoem] = useState("");
  const [mood, setMood] = useState("");
  const history = useHistory();

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newYou = {
      title,
      author,
      poem,
      mood,
    };
    await axios.post(baseURL, { fields: newYou }, config);
    props.setToggleFetch((curr) => !curr);
    
    setTimeout(() => {
      history.push(`/mood/${mood}`);
    }, );
  }

    return (
      <div className="addfav">
      <p className="greeting">Share your favorite.</p>
      <p className="form-description">Submit your favorite poem from your favorite poet. Add a classic. Introduce the world to someone new. Share the love.</p>
      <form className="form"onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoComplete="off"
          required
        />
        <label htmlFor="author">Author</label>
        <input
          id="author"
          type="text"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
          autoComplete="off"
          required
        />

        <label htmlFor="poem">Poem</label>
        <textarea
          id="poem"
          type="text"
          onChange={(e) => setPoem(e.target.value)}
          value={poem}
          autoComplete="off"
          required
        />
        <label className="label">Select Mood</label>
        <select 
        className="dropdown"
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
        <button id="share" type="submit">Share</button>
      </form>
      </div>
    );
  };


export default Addfav;
