import { Link } from "react-router-dom"

function Mood (props) {

console.log(props)

  return (
   
    <div>
      <Link to={`/mood/${props.poem.id}`}>
      <h3>{props.poem.fields.title}</h3>
      </Link>
    </div>
  )
}

export default Mood;