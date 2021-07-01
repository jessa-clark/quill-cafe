function Poems (props) {



  return (
    <div className= "poem-container">
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

export default Poems;