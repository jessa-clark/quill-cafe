import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router";
import { baseURL, config } from "../services";

function Addfav(props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [location, setLocation] = useState("");
  const [poem, setPoem] = useState("");
  const params = useParams();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newFav = {
      title,
      author,
      location,
      poem,
    };
    
      const url = `${baseURL}/newfav/${params.id}`;
      
    await axios.post(url, { fields: newFav }, config);
    props.setToggleFetch((curr) => !curr);
  }

    return (
      <form onSubmit={handleSubmit}>
        <h4>Be you. Express yourself</h4>
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
        />
        <label htmlFor="location">Location</label>
        <input
          id="location"
          type="text"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
          autoComplete="off"
          required
        />
        <label htmlFor="poem">Poem</label>
        <input
          id="poem"
          type="text"
          onChange={(e) => setPoem(e.target.value)}
          value={poem}
          autoComplete="off"
          required
        />
        <button type="submit">Mood</button>
      </form>
    );
  };


export default Addfav;