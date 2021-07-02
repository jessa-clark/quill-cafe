import Mood from "./Mood"

function Displayall(props) {
  
  return (
    <div className="display-all">
      {props.poems.map((poem) => (
        <div className="info" key={poem.id}>
          <Mood poem={poem} />
        </div>
      ))}
    </div>
  );
}

export default Displayall;
