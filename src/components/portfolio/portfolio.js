import React from 'react';
import { useSpring, animated } from 'react-spring';
import './portfolio.css';
import projectImage1 from '../../photos/project-1.png';
import projectImage2 from '../../photos/project-2.png';
import projectImage3 from '../../photos/project-3.png';

function Portfolio() {
  const props = useSpring({
    opacity: 1,
    fontWeight: 700,
    from: { opacity: 0, fontWeight: 400 },
  });

  return (
    <animated.section id="portfolio" className="portfolio" style={props}>
      <div className="portfolio__content">
        <h2 className="portfolio__title">Portfolio</h2>
        <div className="portfolio__items">
          <div className="portfolio__item">
            <img src={projectImage1} alt="Project 1" />
            <h3 className="portfolio__item-title">Austinsmyrealtor.com</h3>
            <p className="portfolio__item-description">This Website is in progress as well.
             My Brother is a real estate agent and was in need of a well rounded lead generation and Testimony website.</p>
            <a href="https://hilarious-paletas-4bf6bc.netlify.app" className="portfolio__item-link">View Site</a>
          </div>
          <div className="portfolio__item">
            <img src={projectImage2} alt="Project 2" />
            <h3 className="portfolio__item-title"> camper rental webiste</h3>
            <p className="portfolio__item-description">I designed this website to help get traffic to rent out campers that I own. 
            my goal with this website is once i am Google Ad Certified this will help me gain an advantage in the market.</p>
            <a href="https://ornate-kelpie-3eff3a.netlify.app" className="portfolio__item-link">View Site</a>
          </div>
          <div className="portfolio__item">
            <img src={projectImage3} alt="Project 3" />
            <h3 className="portfolio__item-title"> Ecommerce website</h3>
            <p className="portfolio__item-description">This project i am working to develope an e-commerce website for my mother and sister, it is still currently a work in progress but you can see the attached code and most of the functionality eventually
            you will be able to see art work and knickknacks for sale. i have used mostly JavaScript and React to build this out.</p>
            <a href="https://cool-mousse-e6a295.netlify.app/" className="portfolio__item-link">View Site</a>
          </div>
          {/* <div className="portfolio__item">
            <img src={projectImage3} alt="Project 4" />
            <h3 className="portfolio__item-title"> Reach out to loved ones reminder</h3>
            <p className="portfolio__item-description">This website was mainly done for myself. with all the aspects of a super busy life
            i needed something to remind me to reach out or text my family and friends. i used google firebase to store the information of adding new people
            to a person list, using javascript and react as the main frameworks and also added many tests to ensure that the back end was working correctly. 
            </p>
            <a href="https://cool-mousse-e6a295.netlify.app/" className="portfolio__item-link">View Site</a>
          </div>
          <div className="portfolio__item">
            <img src={projectImage3} alt="Project 5" />
            <h3 className="portfolio__item-title"> copy chat gpt conversations and send and save them to notion</h3>
            <p className="portfolio__item-description">this is a google/brave extension that allows you to log into chat gpt as normal, and then save those chats and send them directly to a specific notion folder.
            this came about because one day our friend chatty g was down and i didnt want to lose all the prompts and data that chatty g generated. so now it i can automatically save that chat conversation right into notion
            and look use that information at a later date.  </p>
            <a href="https://cool-mousse-e6a295.netlify.app/" className="portfolio__item-link">View Site</a>
          </div>
          <div className="portfolio__item">
            <img src={projectImage3} alt="Project 6" />
            <h3 className="portfolio__item-title"> automatic job application applier </h3>
            <p className="portfolio__item-description"> have you ever needed a job... right? everyone reading this knows that feeling of needing to get a job or wanting to make a career change. 
            now having to spend 15-40 hours applying to jobs, reading job requirements and essentially wasting time. well with this bad boy you can auto apply to jobs like no tomorrow. 
            this came out of the grand experience of applying to a many multitude of jobs instead of spending precious time doing what i truly enjoy.  CODING! 
            </p>
            <a href="https://cool-mousse-e6a295.netlify.app/" className="portfolio__item-link">View Site</a> */}
          </div>
        </div>
      {/* </div> */}
    </animated.section>
  );
}

export default Portfolio;
