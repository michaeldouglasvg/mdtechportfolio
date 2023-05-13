import React, { useEffect } from 'react';
import { ContactMainSTyles, FlexWrapper,  GridContactContainer, 
  FlexContactContainer, ContactTopConatiner, ContactBottomContainer,
  MapContainerLeft, FormConainer} from "../components/styled/Contact.styled"
import { BiQuestionMark} from "react-icons/bi";

import AOS from 'aos';
import 'aos/dist/aos.css';
//  Contact data
import { GetinTouchdata } from "../constants/contactsdata"
// Map data
import { Mapdatabase } from '../constants/mapdata';

const Contact = ({ darkmode }) => {

  // AOS animation
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <ContactMainSTyles>
      <div className='Titleheader' data-aos="zoom-in"><h1>Contacts</h1></div>
      <FlexWrapper>

        <ContactTopConatiner>
          <div className='Contact-intouch'>
            <h1 data-aos="fade-right">Get in touch</h1>
          </div>
         <GridContactContainer>
          {
            GetinTouchdata.map((value, id) => {
              return <div className='Cardintouch' data-aos="fade-up" key={id}>
                <div className='Icon'>{value.contactIcon}</div>
                <div className='Intouchguide'>
                  <p>{value.contactType}</p>
                  <p>{value.contactLink}</p>
                </div>
              </div>
            })
          }
         

         </GridContactContainer>
        </ContactTopConatiner>

        <ContactBottomContainer>
          <div className='Contact-intouch'>
            <h1>Map and Contact</h1>
          </div>
          <FlexContactContainer>
            <MapContainerLeft data-aos="zoom-in">
             <div className='Maplabel' data-aos="fade-right"><p>Location</p></div>
             <img src={Mapdatabase.mapImage} alt="description" width='100%' height='100%'/>
             {/* Map goes here */}
             <div className='Mapfooter' data-aos="zoom-in"><p>@2024</p></div>
            </MapContainerLeft>
            
            <FormConainer>
              <div className='TopForm'>
                <p data-aos="zoom-in">Hire Me</p>
                <BiQuestionMark size={40} color='grey'/>
              </div>

              <div className='FormContainer' data-aos="fade-up">
                <form>
                  <div className='Formgroup'>
                    <span>Full name</span>
                    <input type="text" placeholder='Enter full name' />
                  </div>
                  <div className='Formgroup'>
                    <span>Email</span>
                    <input type="text" placeholder='Your email address' />
                  </div>
                  <div className='Formgroup'>
                    <span>Subject</span>
                    <input type="text" placeholder='Reason for contact' />
                  </div>
                  <div className='Formgroup'>
                    <span>Message</span>
                   <textarea placeholder='Write your message here...' />
                  </div>
                  <div className='Formgroup'>
                    <input type="submit" value='Send Message' />
                  </div>
                </form>
              </div>
            </FormConainer>
          </FlexContactContainer>
        </ContactBottomContainer>

      </FlexWrapper>
    </ContactMainSTyles>
  );
}

export default Contact;
