import React from "react";
import AppLayout from "../components/Layouts/AppLayout"

import photoMain from "../assets/images/header-img-florist.jpg"
import ArticleCard from "../components/ArticleCard";

import {pins, cards} from "../data";

function HomeScreen() {
  console.log(pins, cards)

  return (
    <AppLayout>
      <section className="main">
        <header className="hero">
          <div className="color-green">
            <p className="ff-spooftrial" style={{ fontSize: '1.5rem' }}>Explore new opportunities.</p>
            <h1 className="ff-spooftrial"><span className="color-warning">Grow</span> your <br /> business.</h1>
            <p className="wiket"><b>Wiket is the first business to business network</b> which lets you connect to
              mind like people.</p>
          </div>
        </header>
        <section className="hanging-garden">
          <div className="large-banner-wrapper">
            <header>
              <h2 className="color-green ff-spooftrial">Hanging Garden</h2>
              <p>Floristin Bangkok</p>
            </header>
            <div className="header-banner">
              <img src={photoMain} alt="Hanging garden" />
            </div>
          </div>
          <div className="cards-wrapper">
            {
              cards.map((card, index) => {
                return <ArticleCard card={card} key={index} />
              })
            }
            {
              pins.map((pin, index) => {
                return <div className="pin" key={index} ><img src={pin.url} alt={pin.alt} /></div>
              })
            }
          </div>
        </section>
      </section>
    </AppLayout>
  );
}

export default HomeScreen