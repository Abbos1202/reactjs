import React from "react";
import "./Card.css";

class Card extends React.Component {
  render() {
    return (
      <div className="container">
        <img
          className="img_size"
          src={this.props?.src}
          alt="beautiful places"
        />
        <h3 className="header">{this.props?.header}</h3>
        <div className="flexing">
          <img className="card_item_1" src="./imgs/Day.png" alt="day" />
          <img className="card_item_2" src="./imgs/Person.png" alt="person" />
          <img className="card_item_3" src="./imgs/Review.png" alt="review" />
          <img className="card_item_4" src="./imgs/Location.png" alt="location" />
          <button className="btn">{this.props?.button}</button>
        </div>
      </div>
    );
  }
}
export default Card;
