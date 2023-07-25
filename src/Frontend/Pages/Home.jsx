import React from 'react'
import Header from '../Components/Header/Header'
import Hero from '../Assets/Bibliophile.svg'
import Button from '../Components/Button'
import './Home.css'
import { useNavigate } from 'react-router-dom'
import FeaturedCategories from '../Components/FeaturedCategories'
import Footer from '../Components/Footer'
const Home = () => {
  const navigate=useNavigate();
  const goToProductPage=()=>{
    navigate('/products');
  }
  return (
   <>
   <Header/>
   <div className="hero-section">
    <section>
      <h1>Immerse Yourself in the World of Words</h1>
      <p>
        Literary Lounge is your one-stop book shop. From classic literature to contemporary bestsellers, 
        from geopolitical books to sci-fi, we have it all. Indulge in the magic of words from the comfort of your
         own literary lounge.
      </p>
      <Button onClickOperation={goToProductPage}>
        Start Exploring
      </Button>
    </section>
    <img src={Hero} alt="Hero-image" className="hero-image"/>
   </div>
   <div className="featured-section">
    <FeaturedCategories/>
   </div>
   <Footer/>
   </>
      
  )
}

export default Home