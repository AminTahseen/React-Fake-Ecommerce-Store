import Header from "../components/header";
import Breaker from "../components/breaker";
import Footer from "../components/footer";
import { useState } from "react";
import NavbarCategories from "../components/navbar-categories";
import NewsLetter from "../components/newsletter-section";
import ContactForm from "../components/contact-form";
const Contact = () => {
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
              <h1>Contact Us</h1>
              <ContactForm />
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
export default Contact;
