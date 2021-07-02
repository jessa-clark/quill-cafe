import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Card from "./CardUI";
import img1 from '../assets/Image9.png'
import img2 from '../assets/Image8.png'
import img3 from '../assets/Image10.png'



class Cards extends Component {
  render(){
    return(
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <Link to="/newyou">
            <Card 
            imgsrc={img3} 
            alt="lightbulb"
            title="Add your own"
            text="Add your own poetry creation and assign it a mood"
            button="Add you"
            />
            </Link> 
          </div>
          <div className="col-md-4">
            <Link to="/displayall">
            <Card 
            imgsrc={img2} 
            title="Browse all"
            alt="people"
            text="Browse all the moods and view all poems"
            />
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/newfav">
            <Card 
            imgsrc={img1} 
            title="Add your favorite"
            alt="quote box"
            text="Add your favorite poem and assign it a mood"
            />
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Cards;