// import { Button } from '../components/maincomps/Button';
import React, { useState, useEffect } from 'react';
import { GridGlobal } from "../components/maincomps/Gridcomp"
import { ServicesMainStyles,
 Ratings, HappyClients, PackageRatings, MyServicesCard,
 SingleCardDisplay, AdvancedRequests, SocialMediaTrends } from "../components/styled/Services.styled"

import { Button } from '../components/maincomps/Button';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaStar, FaHeart, FaCommentAlt } from "react-icons/fa";

// Auto-carousel
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

// Services data
import { Rating, Cardsdata } from "../constants/services"

const Services = () => {
  const[comment, setComment] = useState(false)
  const[numcomments, setNumcomments] = useState(0)
  const[likes, setLikes] = useState(0)

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (event) => {
    setCurrentIndex(event.item);
  };

  const cardDesplay = () =>
    Cardsdata.map((item, index) => (
      <SingleCardDisplay key={index}>
        <div className='CardTitle'><h3>{item.cardTitle}</h3></div>
        <div className='CardImage'>
        <img src={item.cardImage} alt="description" width='100%' height='100%'/>
        </div>
        <div className='CardDescription'>
          <p>{item.cardDescription}</p>
        </div>
        <div className='CardContacts'>
          <p>{item.cardEmail}</p>
          <p>Whatsapp</p>
        </div>
      </SingleCardDisplay>
    ));

  // Open comment section
  const handleOpenComment = () => {
    setComment(!comment)
  }

  //  Post comment when click the post button
  const postComment = () => {
    setComment(false)
    setNumcomments(numcomments + 1)
  }

  // Likes 
  const handleLIkes = () => {
    setLikes(likes + 1)
  }

  // AOS animation
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <ServicesMainStyles>
      <div className='Titleheader' data-aos="zoom-in"><h1>Services</h1></div>
      <GridGlobal>
        {/* Left display ratingd */}
        <Ratings>
        <HappyClients data-aos="fade-up">
          <div className='Title' data-aos="zoom-in"><h1>Client & Ratings ({Rating.length})</h1></div>
          {
            Rating.map((value, index) => {
              return <PackageRatings data-aos="fade-up" key={index}>
                <div className='Description'>
                  <h2>{value.ratingTitle}</h2>
                  <p>{value.ratingDescription}</p>
                </div>
                <div className='Ratting-container'>
                  <p>Ratings: </p>
                  <p>{
                    value.ratingStatus !== undefined ? <>
                    <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></> : "No rattings"
                  }</p>
                </div>
              </PackageRatings>
            })
          }
          
        </HappyClients>
        </Ratings>

        {/* Middle card display */}
        <Ratings>
        <MyServicesCard data-aos="fade-up">
          <div className='Title'data-aos="zoom-in"><h1>My Services</h1></div>
          <AliceCarousel
              items={cardDesplay()}
              slideToIndex={currentIndex}
              onSlideChanged={handleSlideChange}
              autoPlay
              autoPlayInterval={3000}
              infinite={true}
            />
        </MyServicesCard>
          
        </Ratings>

        {/* Right display contents */}
        <Ratings>
        <AdvancedRequests data-aos="fade-up">
          <div className='Title' data-aos="zoom-in"><h1>Trending & News</h1></div>

          <SocialMediaTrends>

          <div className='MediaTrendsNavigation' data-aos="fade-up">
            <Button bg='blue' clr='white'>Facebook</Button>
            <Button bg='skyblue' clr='white'>Twitter</Button>
            <Button bg='orangered' clr='white'>Instagram</Button>
            <Button bg='green' clr='white'>News</Button>
          </div>

       
          <div className='FeedDisplay'>

            {/* Facebook */}
            <div className='SingleFeed' data-aos="zoom-in">
            <h1>Facebook</h1>
            <p>he objectives of this course is to offer the students a holistic overview of Information SecuritThe objectives of this course is to offer the students a holisti</p>
            <div className='CommentSection'>
              <div className='Form'>
              <p onClick={handleOpenComment}>{numcomments} <FaCommentAlt color={numcomments >= 1 ? "green" : "white"}/></p>
              <div className='Inputcomment'>
                {comment && <> <input type="text" placeholder='Write your comment' />
                <button type='submit' onClick={postComment}>Post</button> </>}
              </div>
              </div>
              <div className='Likes' onClick={handleLIkes}>{likes} <FaHeart color={likes >= 1 ? "orangered" : "white"}/></div>
            </div>
            </div>
    
          </div>
          

          </SocialMediaTrends>
          
        </AdvancedRequests>
        </Ratings>

      </GridGlobal>
    </ServicesMainStyles>
  );
}

export default Services;
