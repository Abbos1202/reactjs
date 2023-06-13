import React from "react";
import Card from "./Card";
import "./index.css";
import img_1 from "./assets/image1.jpg";
import img_2 from "./assets/image2.jpg";
import img_3 from "./assets/image3.jpg";
import img_4 from "./assets/image4.jpg";
import img_5 from "./assets/image5.jpg";
import img_6 from "./assets/image6.jpg";

class Main extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Card 
        src={img_1} 
        header="Enjoy Beauty place in Bali City" 
        button="$1200"
        />
        <Card 
        src={img_2} 
        header="Enjoy Beauty place in Rom City" 
        button="$1200"
        />
        <Card 
        src={img_3} 
        header="Enjoy Beauty place japan City" 
        button="$1200"
        />
        <Card 
        src={img_4} 
        header="Enjoy Beauty place japan City" 
        button="$1200"
        />
        <Card 
        src={img_5} 
        header="Enjoy Beauty place Paris City"
        button="$1200"
        />
        <Card 
        src={img_6} 
        header="Enjoy Beauty place in Bali City" 
        button="$1200"
        />
      </div>
    );
  }
}
export default Main;
