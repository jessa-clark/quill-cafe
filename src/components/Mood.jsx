import "bootstrap/dist/css/bootstrap.min.css";
import './Mood.css'

function Mood (props) {



  return (
    <div>
      <div className="title">
      {props.poem.fields.title}
      </div>
      <div className="author">
      <h4>{props.poem.fields.author}</h4>
      </div>
      <div className="poem">
      <p>{props.poem.fields.poem}</p>
      </div>
    </div>
  )
}

export default Mood;