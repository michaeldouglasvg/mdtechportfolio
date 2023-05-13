import React, { useEffect, useState } from 'react';
import { AboutMainStyled, DisplayLeft, ProgrammingJourney } from "../components/styled/About.styled"
import { CardGlobal } from "../components/maincomps/Cardcomp"

import { GridGlobal } from "../components/maincomps/Gridcomp"
import { FaFacebook, FaTwitter, FaWhatsapp, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

import AOS from 'aos';
import 'aos/dist/aos.css';

// Auto-carousel
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

// Project data
import { Projectsdisplaydata, LanguagesSection, LangImages } from "../constants/About.data"


const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [journey, setJourney] = useState(0);

  const handleSlideChange = (event) => {
    setCurrentIndex(event.index);
  };

  const handleJourneyChange = (event) => {
    setJourney(event.index);
  };

  const renderItems = () =>
    Projectsdisplaydata.map((item, index) => (

      <CardGlobal data-aos="fade-up" key={index}>
        <div className='CardTitle'>
          <p>{item.projectName}</p>
        </div>
        <div className='CardImage'> 
          <img src={item.projectImages} alt={index}/>
        </div>
        <div className='CardProjects'>
          <p>Projects ({item.numProjects})</p>
        </div>
      </CardGlobal>
    ));

    const languageDisplay = () =>
      LangImages.map((items, index) => (
        <div data-aos="zoom-in" key={index}>
          <p>{items.langImage}</p>
          <p>{items.langPercentage}</p>
        </div>
    ));

  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <AboutMainStyled>
      <div className='Titleheader' data-aos="zoom-in"><h1>About (Technologies)</h1></div>
      <GridGlobal>

       <DisplayLeft data-aos="fade-up">
        <AliceCarousel
            items={renderItems()}
            slideToIndex={currentIndex}
            onSlideChanged={handleSlideChange}
            autoPlay
            autoPlayInterval={3000}
            infinite={true}
          />
      
        <CardGlobal data-aos="fade-up">
         <div className='CardLinks'>
          <div><FaFacebook size={30} color='blue'/></div>
          <div><FaTwitter size={30} color='skyblue'/></div>
          <div><FaWhatsapp size={30} color='green'/></div>
          <div><FaInstagram size={30} color='orangered'/></div>
          <div><FaGithub size={30} color='black'/></div>
          <div><FaLinkedin size={30} color='#00c0de'/></div>
         </div>
          {/* <Skeleton variant="circular" width={40} height={40} /> */}
        </CardGlobal>
       </DisplayLeft>


       <ProgrammingJourney data-aos="fade-up">
        <div><h1 className='Title' data-aos="zoom-in">Programming Journey</h1></div>

        <div className='Display'>
          {
            LanguagesSection.map((value, id) => {
              return (
                <CardGlobal data-aos="fade-up" key={id}>
                  <div className='TopBar' data-aos="zoom-in">
                    <div className='Image'><img src={value.developerImage} alt={id} /></div>
                    <p>{value.developerName}</p>
                  </div>
                  <div className='LanguageDescription'>
                    <p>{value.developerDesription}</p>
                  </div>
                </CardGlobal>
              )
            })
          };
        </div>
        
        {/* Languages display */}
        <CardGlobal data-aos="fade-up">
        <div className='CardLanguages' style={{ width: '100%' }}>

          <AliceCarousel
            items={languageDisplay()}
            slideToIndex={journey}
            onSlideChanged={handleJourneyChange}
            autoPlay
            autoPlayInterval={3000}
            infinite={true}
          />

         </div>
        </CardGlobal>
       </ProgrammingJourney>

      </GridGlobal>
    </AboutMainStyled>
  );
}

export default Projects;