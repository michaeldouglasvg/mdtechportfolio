import { Button } from '../components/maincomps/Button';
import React, {useState, useEffect } from 'react';
import { GridGlobal } from "../components/maincomps/Gridcomp"
import { ProjectsMainStyles, 
 UnderDevelopmentProjects, 
 FinishedProjects,
 LeftConatiner,
 TopGrid, ImageSection, TechnologiesUsed, 
 RightContainer, ViewProject } from "../components/styled/Projects.styled"

 // Auto-carousel
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

// Data
import { Partialprojects, CompleteProjects } from "../constants/projects"

const Projects = ({ darkmode }) => {
 const[technologies, setTechnologies] = useState(false)
 const[projectclr, setProjectclr] = useState(false)
 const [currentIndex, setCurrentIndex] = useState(0);

 const handleSlideChange = (event) => {
   setCurrentIndex(event.index);
 };

 // Handle the show technology function
 const toogleTechnologies = () => {
  setTechnologies(!technologies)
 }

 // Handling proojects clicked
 const openProject = () => {
  setProjectclr(!projectclr)
 }

//  Projects >> Underveleopment
 const workingOn = () =>
  Partialprojects.map((item, index) => (
    <LeftConatiner data-aos="fade-up" key={index}>
      <TopGrid data-aos="fade-up">
      <div className='Section'>
        <p className='First-Prog'>Start:</p>
        <p className='Second-Prog'>{item.startDate}</p>
      </div>
      <div className='Section'>
        <p className='First-Prog'>Finish:</p>
        <p className='Second-Prog'>{item.endDate}</p>
      </div>
      <div className='Section'>
        <p className='First-Name'>Category:</p>
        <p className='Second-Name'>{item.category}</p>
      </div>
      <div className='Section'>
        <p className='First-Name'>Title:</p>
        <p className='Second-Name'>{item.title}</p>
      </div>
      </TopGrid>
      <ImageSection data-aos="zoom-in">
      <img src={item.image} alt="description" width='100%' height='100%'/>
      </ImageSection>
      <TechnologiesUsed data-aos="fade-up">
      {!technologies ? 
      <p className='Buttons' onClick={toogleTechnologies}
      style={{background: technologies ? "green":"black", textAlign: technologies && "center"}}>View Technologies Used</p>
      :
      <p className='Buttons' onClick={toogleTechnologies}
      style={{background: technologies ? "green":"black", textAlign: technologies && "center"}}>Technology deployed in this project</p>
      }
      {technologies && <div className='MainTechnologies' data-aos="fade-in">
        <div className='Frontend'>
        <h1>Frontend Technologies</h1>
        <p>{item.frontentTechs}</p>
        </div>
        <div className='Backend'>
        <h1>Backend Technologies</h1>
        <p>{item.backendTech}</p>
        </div>
      </div>}
      </TechnologiesUsed>
    </LeftConatiner>
  ));


// Projects >> Working projects
const workingProjectts = () =>
  CompleteProjects.map((item, index) => (
    <RightContainer style={{transform: projectclr && "scale(.96)"}} data-aos="fade-up" key={index}>
      <div className='RightLinks'>
      <p data-aos="zoom-in">Technology: {item.technology}</p>
      <p data-aos="zoom-in">Project: {item.projectName}</p>
      </div>
      <ImageSection data-aos="zoom-in">
      <img src={item.projectImg} alt="description" width='100%' height='100%'/>
      {/* Loop through several images */}
      </ImageSection>
      <ViewProject>
      <p data-aos="fade-up">{item.projectDescription}</p>
      <div className='LowerLinks'>
        <a href={item.projectUrl} target='__blank'>
          <Button bg='skyblue' clr='black' onClick={openProject} data-aos="zoom-in">View Project</Button>
        </a>
        <p style={{color: darkmode === "light" ? "black" : "white", fontSize: "1rem", marginRight: "1rem", fontWeight: 600}}>
            {`${index === 0 ? "1" : index + 1} / ${CompleteProjects.length}`}
        </p>
      </div>
      </ViewProject>
    </RightContainer>
  ));

 // AOS animation
 useEffect(() => {
    AOS.init();
  }, []);


  return (
    <ProjectsMainStyles>
      <div className='Titleheader' data-aos="zoom-in">
        <h1>Projects ({Partialprojects.length + CompleteProjects.length})</h1>
      </div>
      <GridGlobal>

       {/* left section */}
       <UnderDevelopmentProjects>
        <div className='Titleworking'>
          <h1>Working on({Partialprojects.length})</h1>
        </div>
        
        {/* Carousel */}
        <AliceCarousel
            items={workingOn()}
            slideToIndex={currentIndex}
            onSlideChanged={handleSlideChange}
            autoPlay
            autoPlayInterval={9000}
            infinite={true}
          />
       </UnderDevelopmentProjects>

       {/* right section */}
       <FinishedProjects data-aos="fade-up">
        <div className='Title' data-aos="fade-left">
          <h1>Working Projects({CompleteProjects.length})</h1>
        </div>

        <AliceCarousel
            items={workingProjectts()}
            slideToIndex={currentIndex}
            onSlideChanged={handleSlideChange}
            autoPlay
            autoPlayInterval={3000}
            infinite={true}
          />
       {/* <Skeleton variant="rectangular" width={210} height={118} /> */}
       </FinishedProjects>

      </GridGlobal>
    </ProjectsMainStyles>
  );
}

export default Projects;
