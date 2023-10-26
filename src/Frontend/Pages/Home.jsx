import React from 'react'
import Hero from '../Assets/Bibliophile.svg'
import BookCart from '../Assets/BookCart.svg'
import Button from '../Components/Button'
import './Home.css'
import { useNavigate } from 'react-router-dom'
import FeaturedCategories from '../Components/FeaturedCategories'
import Footer from '../Components/Footer'
import Carousel from '../Components/Carousel/Carousel'
const Home = () => {
  const navigate=useNavigate();
  const goToProductPage=()=>{
    navigate('/products');
  }

  const carousel=[
    <img src={Hero} alt="Hero-image" className="hero-image"/>,
    <img src={BookCart} alt="Hero-image" className="hero-image"/>,
    // <img src={Hero} alt="Hero-image" className="hero-image"/>,
  ]

  return (
   <>
   <div className="hero-section">
    <section className="text-section">
      <h1 className='hero-heading'>
        Immerse Yourself in the World of Words
      </h1>
      <p className="landing-page-text">
        Literary Lounge is your one-stop online bookstore. From classic literature to contemporary bestsellers, 
        from geopolitical books to sci-fi, we have it all. Indulge in the magic of words from the comfort of your
         own space.
      </p>
      <Button onClickOperation={goToProductPage}>
        Start Exploring
      </Button>
    </section>
    <Carousel slides={carousel} infinite/>
   </div>
   <div className="explore-btn">
      <Button onClickOperation={goToProductPage}>
        Start Exploring
      </Button>
      </div>
   <div className="featured-section">
    <FeaturedCategories/>
   </div>
   <Footer/>
   </>
      
  )
}

export default Home