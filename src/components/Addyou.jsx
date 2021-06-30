import axios from "axios";
import { useState } from "react";
import { useHistory, useParams } from "react-router";
import { baseURL, config } from "../services";

function Addyou(props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [location, setLocation] = useState("");
  const [poem, setPoem] = useState("");
  const params = useParams();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newYou = {
      title,
      author,
      location,
      poem,
    };
    if (params.id) {
      const url = `${baseURL}/${params.id}`;
      await axios.put(url, { fields: newYou }, config);
    }
    await axios.post(baseURL, { fields: newYou }, config);
    props.setToggleFetch((curr) => !curr);

    setTimeout(() => {
      history.push("/");
    });

    return (
      <form onSubmit={handleSubmit}>
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
}

export default Addyou;
