import Header from "../components/header";
import Breaker from "../components/breaker";
import Footer from "../components/footer";
import { useState } from "react";
import NavbarCategories from "../components/navbar-categories";
import NewsLetter from "../components/newsletter-section";
const About = () => {
  const [category, setCategories] = useState("");
  const setCategory = (catg) => {
    let selected = category;
    selected = catg;
    setCategories(selected);
  };
  return (
    <>
      <div className="container-holder">
        <div className="container">
          <Header />
          <hr />
          <NavbarCategories setCategoryData={setCategory} />
        </div>
        <div className="container-second">
          <div className="about-section-details">
            <div className="about-section-details-section1">
              <h1>About Us</h1>
              <p className="about-section-details-p">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <p className="about-section-details-p">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <br />
              <br />
            </div>
            <div className="breaker-height"></div>
          </div>
          <NewsLetter />
        </div>
        <div className="container">
          <Breaker />
          <Footer />
        </div>
      </div>
    </>
  );
};
export default About;
