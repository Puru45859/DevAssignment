import { useState } from "react";
import Slider from "react-slick";
import "./App.css";

// import icons
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

// import images
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";
import img7 from "./images/img7.jpg";
import img8 from "./images/img8.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

function SampleNextArrow({ onClick }) {
  return (
    <div className="arrow arrow-right" onClick={onClick}>
      <BsArrowRight />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div className="arrow arrow-left" onClick={onClick}>
      <BsArrowLeft />
    </div>
  );
}
function EmptyArrow({ onClick }) {
  return <div></div>;
}

function App() {
  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    focusOnSelect: true,
    swipe: true,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    beforeChange: (current, next) => setSlideIndex(next),
    centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (current, next) => (
      <div className={current === slideIndex ? "dot dot-active" : "dot"}></div>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          nextArrow: <EmptyArrow />,
          prevArrow: <EmptyArrow />,
        },
      },
    ],
  };

  return (
    <div className="">
      <nav class="navbarSection navbar navbar-expand-lg navbar-light">
        <a class="brandName" href="#">
          <div className="logo-brand"></div>
          E-COMM
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link spacing" href="#">
                HOME
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link spacing" href="#">
                ELECTRONICS
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link spacing" href="#">
                BOOKS
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link spacing" href="#">
                MUSIC
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link spacing" href="#">
                MOVIES
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link spacing" href="#">
                CLOTHING
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link spacing" href="#">
                GAMES
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                MORE
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  FURNITURE
                </a>
                <a class="dropdown-item" href="#">
                  ELECTRONICS
                </a>
                <a class="dropdown-item" href="#">
                  TRAVEL
                </a>
                <a class="dropdown-item" href="#">
                  BOTANICAL
                </a>
                <a class="dropdown-item" href="#">
                  CATEGORY NAME
                </a>
              </div>
            </li>
            <li>
              <form class="form-inline my-2 my-lg-0">
                <input
                  class="form-control mr-sm-2 custom-input"
                  type="search"
                  placeholder="Search something"
                  aria-label="Search"
                />
              </form>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <h2 className="heading-sec">Feartured Products</h2>
        <p className="subheading-sec">
          Explore and discover variety of Products
        </p>
      </div>
      <div>
        <div className="slider">
          <Slider {...settings}>
            {images.map((img, index) => (
              <div
                className={
                  index === slideIndex ? "slide slide-active" : "slide"
                }
                key={index}
              >
                <img src={img} alt="" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default App;
