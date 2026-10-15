import React from 'react';
import './About.css';

import BreadCrumMain from '../../Components/BreadCrumMain/BreadCrumMain';
import AboutPageOne from '../../Components/AboutPageOne/AboutPageOne';
import AboutPageTwo from '../../Components/AboutPageTwo/AboutPageTwo';
import AboutPageThree from '../../Components/AboutPageThree/AboutPageThree';
import AboutPageFour from '../../Components/AboutPageFour/AboutPageFour';
import AboutPageFive from '../../Components/AboutPageFive/AboutPageFive';
import AboutPageQuestion from '../../Components/AboutPageQuestion/AboutPageQuestion';

const About = () => {
  return (
    <div className="about-page">

      <BreadCrumMain
        title="About Us"
        subtitle="Meet the people behind your Odisha Journey brand experience."
      />

      <AboutPageOne />
      <AboutPageTwo/>
      <AboutPageThree/>
      <AboutPageFour/>
      <AboutPageFive/>
      <AboutPageQuestion/>

    </div>
  );
};

export default About;