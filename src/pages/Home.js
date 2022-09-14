import Header from "../components/header";
import NavbarCategories from "../components/navbar-categories";
import Breaker from "../components/breaker";
import Footer from "../components/footer";
import ProductList from "../components/product-list";
import { useState } from "react";
import { useParams, useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();
  const { name } = useParams();
  if (name !== null) {
    console.log("name is " + name);
    console.log(location.pathname);
  } else {
    console.log("name is null");
  }
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
          <Breaker />
          <ProductList categoryData={category} />
          <Breaker />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
