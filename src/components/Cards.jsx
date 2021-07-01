import React, { Component } from 'react'
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
            <Card imgsrc={img3} title="Add your own"/>
          </div>
          <div className="col-md-4">
            <Card imgsrc={img2} title="Browse all"/>
          </div>
          <div className="col-md-4">
            <Card imgsrc={img1} title="Add your favorite"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Cards;