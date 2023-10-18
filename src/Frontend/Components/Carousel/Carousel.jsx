import React, {useState,useEffect} from 'react'
import './Carousel.css'

const widthSpan = 100.1

const Carousel = ({slides,infinite}) => {

    const [sliderPosition, setSliderPosition] = useState(0);

    useEffect(() => {
        window.addEventListener('keydown', keyPressHandler);
        return () => {
            window.removeEventListener('keydown', keyPressHandler)
        }
    })


    const displayItems = slides.map((slide, index) =>(
        <div className="carousel-item" id={`carouselitem` + index}>
            {slide}
        </div>
    ))

    const prevClickHandler=()=>{
        let newPosition = sliderPosition;
        if (newPosition > 0) {
            newPosition = newPosition - 1;
        } else if(infinite){
            newPosition=slides.length-1;
        }
        translateFullSlides(newPosition);
        setSliderPosition(newPosition);
    }

    const nextClickHandler=()=>{
        let newPosition = sliderPosition;
        if (newPosition < slides.length - 1) {
            newPosition = newPosition + 1;
        }else if(infinite){
            newPosition=0;
        }
        translateFullSlides(newPosition);
        setSliderPosition(newPosition);
    }

    const keyPressHandler = (event) => {

        console.log(event.keyCode);
        if (event.key === "ArrowLeft") {
            event.preventDefault();
            event.stopPropagation();
            prevClickHandler();
            return;
        }
        if (event.key === "ArrowRight") {
            event.preventDefault();
            event.stopPropagation();
            nextClickHandler();
            return;
        }
    }

    const translateFullSlides = (newPosition) => {
        let toTranslate = -widthSpan * newPosition;
        slides.map((slide,i)=>{
            let elem = document.getElementById(`carouselitem` + i);
            elem.style.transform = `translateX(` + toTranslate +`%)`; 
        })
    }

  return (
    <div>
        <div className="carousel-container">
            <div className='prev'onClick={prevClickHandler}>❰</div>
            <div className='display-frame'>
                {displayItems}
            </div>
            <div className="next" onClick={nextClickHandler}>❱</div>
        </div>
    </div>
  )
}

export default Carousel