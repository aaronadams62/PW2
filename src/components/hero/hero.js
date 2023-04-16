import React from 'react';
import './hero.css';
import heroImage from '../../photos/316277469_8341619385880243_91567643978802218_n.jpg';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__image">
        <img src={heroImage} alt="Hero" />
      </div>
      <div className="hero__content">
        <h1 className="hero__title">Hi, I'm Aaron Adams</h1>
        <p className="hero__description">Greetings, Earthlings! I'm a full-stack web developer, on a mission to create digital wonders that are so user-friendly, even your grandma could use them (sorry, grandma). With a knack for clean coding and a love for making people smile, I'm excited to bring some humor and fun into the world of web development. Let's work together and build something awesome! </p>
      </div>
    </section>
  );
}

export default Hero;
