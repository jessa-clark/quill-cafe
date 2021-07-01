// did a walkthrough on youtube to create the title cards https://www.youtube.com/watch?v=rH9jM-8hAD8

import React from 'react';
import './card-style.css'

const Card = props =>{
return (
  <div className="card text-center shadow">
    <div className="overflow">
      <img src={props.imgsrc} alt={props.alt} className="card-img-top"/>
    </div>
    <div className="card-body text-dark">
      <h4 className="card-title">{props.title}</h4>
      <p className="card-text text-secondary">{props.text}
      </p>
    </div>
  </div>
)
}

export default Card;