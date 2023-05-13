import React, { useEffect, useState } from 'react';
import { Homestyled, ImageContainer, Homeleftdivstyled, CertificatesCenter,
   CertificateDisplay, CertViewContainer } from "../components/styled/Home.styled"
import { FlexGlobal } from "../components/maincomps/Flexcomp"
import { Button } from "../components/maincomps/Button"
import { BiCog, BiDownload, BiLeftArrowAlt, BiExpand, BiCollapse } from "react-icons/bi";
import { FaChevronCircleLeft, FaChevronCircleRight} from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

import DisableRightClick from '../components/maincomps/DisableRightClickAndScreenshot'


import { DataCertificates } from '../constants/Certificates.data'
import { Resumecvdata } from "../constants/resumedata"

import Swal from 'sweetalert2'


const Home = ({ darkmode }) => {
  const[certificates, setCertificates] = useState(false)
  const[singlecertpage, setSinglecertpage] = useState(false)
  const[certcode, setCertcode] = useState(false)
  const[phoneauthentication, setPhoneauthentication] = useState('')
  const[certcount, setCertcount] = useState(0)
  const[resume, setResume] = useState(false)


  // Open certificate
  const showCertificates = () => {
    setCertificates(true)
  }

  // Open resume page
  const showResumeDownload = () => {
    setResume(true)
  }

  // Certificate download function
  const handleCertdownload = () => {
    Swal.fire({
      title: 'From: GtechAmour.com!',
      text: 'Welcome again, Download need to access your phone number for sending download code, Please NOTE that you can NOT download any certificate without the download access code {DAC}.\n\nThank you for visiting My Certificate page.',
      icon: 'error',
      confirmButtonText: 'I agree'
    })
    setCertcode(!certcode)
  }

  // Open certificate view page
  const openCertviewpage = (id) => {
    setCertcount(id)
    setSinglecertpage(!singlecertpage)
  }

  // Check if phone number not empty
  const checkphonenumber = (event) => {
    setPhoneauthentication(event.target.value)

    if(phoneauthentication.length === 9){
      Swal.fire({
        title: 'From: GtechAmour.com!',
        text: 'Sory!!! functionality under maintainance. Your phone number is used to send download access code {DAC} only NOT for other purposes when using this site. I value your Privacy.\n\nThank you for attempting to download.',
        icon: 'info',
        confirmButtonText: 'Cool'
      })
    }
  }

  // Certificate navigation Prev Button
  const certPreviewButton = () => {
      certcount > 0 ? setCertcount(certcount - 1) : setCertcount(DataCertificates.length - 1)
  }

  // Cert Next Button
  const certNextButton = () => {
    certcount < DataCertificates.length - 1 ? setCertcount(certcount + 1) : setCertcount(0)
  }

  // Main function to render elements
  function showCertificatview() {
    return <CertificateDisplay>

      <CertViewContainer data-aos="zoom-in">
        <div className='TopSection'>
          <p style={{color: darkmode !== "light" ? "black" : "white", fontSize: "1rem", fontWeight: 500}}>
            Result for {DataCertificates[certcount].certDate} : <span style={{color: "skyblue"}}>{DataCertificates[certcount].certName}</span>
          </p>
          <div  className='Colapse'>
           <BiCollapse color={darkmode !== "light" ? "black" : "white"} size={30} onClick={openCertviewpage}/>
          </div>
        </div>
        {/* Display page */}
        <div className='Viewsinglecertarea'>
          <div className='Actioncertbutton left'>
            <FaChevronCircleLeft  
            color={darkmode !== "light" ? "black" : "white"} size={30} onClick={certPreviewButton}/>
          </div>
          
          <div className='CertImage'>
             <img src={DataCertificates[certcount].certImage} alt='Logo'/>
          </div>

          <div className='Actioncertbutton right'>
            <FaChevronCircleRight  
            color={darkmode !== "light" ? "black" : "white"} size={30} onClick={certNextButton}/>
          </div>
        </div>
        <div className='Certfoooter'>
         <p style={{color: darkmode !== "light" ? "black" : "white", fontSize: "1rem", marginRight: "1rem", fontWeight: 600}}>
          {`${certcount === 0 ? "1" : certcount + 1} / ${DataCertificates.length}`}
          </p>
         <BiDownload size={30} color={darkmode !== "light" ? "black" : "white"} onClick={handleCertdownload}/>
         {!certcode ? <p style={{color: darkmode !== "light" ? "black" : "white", paddingLeft: "1rem"}}>Download</p> 
         : 
         (certcode ? <div className='Authenticator'>
          <span style={{color: darkmode !== "light" ? "black" : "white"}}>Phone: </span>
          <input type="text" placeholder='Eg:- 07XXXXXX82' value={phoneauthentication}
           onChange={checkphonenumber}/>
         </div>
         :
         (phoneauthentication.length >= 10 && <div className='Authenticator'>
         <span style={{color: darkmode !== "light" ? "black" : "white"}}>Code: </span>
         <input type="text" placeholder='Enter code' />
        </div>)
        )}
        </div>
      </CertViewContainer>
     
    </CertificateDisplay>
  }


  // AOS animation
  useEffect(() => {
    AOS.init();
  }, []);

  // Cerificate setting page
  const certificateSettings = () => {
    alert("Oops!!!, Cerficate settings are to enable download and granding previllages. This feature needs you to signin. Currently the settings are dussabled for maintainance.")
  }

  // Return main component for export
  return (
    <DisableRightClick>
      <Homestyled>
        {singlecertpage && showCertificatview()}
        <FlexGlobal>
          <Homeleftdivstyled>
            <p className='Grettings' data-aos="fade-down">Hi, <span>I am</span></p>
            <h1 className='Name' data-aos="fade-up">Michael Douglas</h1>
            <p className='Typed' data-aos="zoom-in">Full Stack Developer.</p>
            <p className='Profile' ddata-aos="zoom-in">Am a graduate from South Eastern Kenya University under Computer Science, Using new technology to write optimal codes to solve different technical problems. Visit the project section to see my work. Click certificate to visit my farther studies.</p>

            <div className='ButtonsCvH' data-aos="fade-up">
              {!resume && <Button bg='skyblue' clr='white' onClick={showResumeDownload}>Download CV</Button>}
              <Button bg='orange' clr='white'>Hire Me</Button>
              {!certificates && <Button bg='green' clr='white' onClick={showCertificates}>Certificates</Button>}
            </div>
          </Homeleftdivstyled>
          {/* Display if certificates are set to flase */}


        {(!resume && !certificates) && <ImageContainer  data-aos="zoom-out">
          <img src={process.env.PUBLIC_URL+'/images/slides/mainprofile.jpg'} alt="description"/>
          </ImageContainer>}

          {/* Show certificates if certificates are set to true */}
          {certificates && <div>
            <CertificatesCenter data-aos="zoom-in" data-aos-offset="0">
            <div className='TopCertisfaction' style={{cursor: "pointer"}}>
              <Button onClick={() => {setCertificates(false)}} bg='green' clr='white'><BiLeftArrowAlt size={20}/> Back</Button>
              <p>My Certificates ({DataCertificates.length})</p>
              <BiCog size={30} color={darkmode === "dark" ? "white" : "black"} onClick={certificateSettings}/>
            </div>
            {/* Display image */}
            <div className='Imagecontainer'>
              {DataCertificates.map((cert, key) => {
                return  <div className='SingleCertImage' key={key}>
                  <p style={{color: darkmode !== "light" ? "black" : "white", fontSize: "1rem"}}>From: {cert.certFrom}</p>
                  <img src={cert.certImage} height="100%" width="100%" alt={cert.id}  onClick={() => openCertviewpage(key)}/>
                  <div className='CertDownload'>
                    <p style={{color: darkmode !== "light" ? "black" : "white"}}>{cert.certDate}</p>
                    <div className='Expand'><BiExpand size={25} color={darkmode !== "light" ? "black" : "white"} 
                    onClick={() => openCertviewpage(key)}/></div>
                  </div>
                </div>
              })}
            </div>
            </CertificatesCenter>
          
          </div>}


          {/* Show resmue page fpr download remsime */}
          {resume && <div>
            <CertificatesCenter data-aos="zoom-out" data-aos-offset="0">
            <div className='TopCertisfaction' style={{cursor: "pointer"}}>
              <Button onClick={() => {setResume(false)}} bg='skyblue' clr='white'>
                <BiLeftArrowAlt size={20}/> Close </Button>
              <p>Download Page({Resumecvdata.length})</p>
            </div>
            {/* Display image */}
            <div className='Imagecontainer'>
              {Resumecvdata.map((resumedata, key) => {
                return  <div className='SingleCertImage' key={key}>
                  <img src={resumedata.dataImage} height="100%" width="100%" alt={resumedata.id}/>
                  <div className='CertDownload'>
                    <p style={{color: darkmode !== "light" ? "black" : "white"}}>Download {
                      resumedata.dataType
                    }</p>
                    <div className='Expand'><BiDownload size={25} color={darkmode !== "light" ? "black" : "white"} /></div>
                  </div>
                </div>
              })}
            </div>
            </CertificatesCenter>
          
          </div>}
        </FlexGlobal>
      </Homestyled>
    </DisableRightClick>
  );
}

export default Home;
