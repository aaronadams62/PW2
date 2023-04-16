import React, { useState } from 'react';
import './about.css';
import profileImage from '../../photos/aaron_adams_fullstack_full_stack_engineer_react_software_developer.png.jpg';
import resumeFile from './finalized resume 3.docx';

function About() {
  const [showPopup, setShowPopup] = useState(false);

  const handleDownloadClick = () => {
    setShowPopup(true);
    const link = document.createElement('a');
    link.href = resumeFile;
    link.download = 'finalized_resume_3.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <section id="about" className="about">
      <div className="about__content">
        <h2 className="about__title">About Me</h2>
        <div className="about__image">
          <img src={profileImage} alt="Profile" />
        </div>
        <p className="about__description">
          {}
          I started in the tech industry in may of 2022, after being in the mortgage industry for 5+ years  and as many of you know or if you dont, rates
        are at the highest its been since 2008, so a friend recommend that it was time for a career shift. i had always been the one in the family to amaze everyone by fixing the internet
        by simply restarting the router so i decided to wow the family one more time by building and designing cool tools to help make our lives a little bit easier. i gotta make mama proud! 
        I have completed Three Zero To Mastery Courses and have continued to grow my education. so far i have completed Complete React Developer in 2022 which comes with Redux,
         Hooks, and GraphQL, The Complete Web Developer in 2022: Zero To Mastery (which is a full stack developer course) outside of these skills, i have a passion for spending 
         time with Loved ones, Making people laugh and Succeeding at what i set my mind to.

        Goals that i am currently Working on is helping 100 people through Freelance work. Completing Continuing education as a full stack engineer. looking at Machine learning and
         Cloud computing as outcomes within the next 12 months as of 10/08/2022
        </p>
        <strong>What's in progress or under construction currently as of 03/14/2023:</strong>
        <div className="about__point">
          1. reach out to friends and family app. this little fella helps keep me on my toes by making sure that within a 3 month period that i reach out to everyone of my friends and family 
         that i care about and love to make sure i say hi and keep in touch with them. one thing that made me open my eyes how fast time flies is that during covid everyone was busy with work
         and the unknown that my family forget to keep in touch with one another. so this little bad boy helps remind me to reach out and let them know im thinking of them and i wont forget due
         to my busy schedule. 
          {/* ... */}
        </div>
        <div className="about__point">
          2. Saas program that will help a niche market grow. the gist is a one stop  shop for this niche market from everything to inventory management systems to payroll. and many more 
         features. open to speak about it in the interview 
          {/* ... */}
        </div>
        <div className="about__point">
          3. a gmail script. this would basically allow me to automate tasks as simple as moving an email with a specific label into its correct place so i dont have to go in every morning
         and spend 5 minutes moving things around and making sure its all in its correct spot. 

          {/* ... */}
        </div>
        <div className="about__point">
          4. updating my camper rental website making it more modern and sleek

        </div>
        <button className="about__resume-link" onClick={handleDownloadClick}>Download My Resume, do it i dare you :D</button>
        {showPopup && (
          <div className="about__popup">
            <div className="about__popup-content">
              <p className="about__popup-message">Thank you... you won't regret this :)</p>
              <button className="about__popup-close" onClick={handlePopupClose}>Close</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default About;
