import Axios from "axios";
import { useEffect, useState } from "react";
import { CATEGORIES_URL } from "../utils/Constants";

const NavbarCategories = (props) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState(null);
  const [menuVisible, setMenuVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  let categoriesSection = null;
  let allProdSection = null;
  let menu = null;
  useEffect(() => {
    const URL = CATEGORIES_URL;

    const getCategories = () => {
      Axios.get(URL)
        .then((res) => {
          setCategories(res.data);
        })
        .catch(function (error) {
          setErrorMessage("An Unexpected Error Occured");

          console.log(`CATEGORIES ERROR : ${error}`);
          setCategories(null);
        });
    };
    getCategories();
  }, []);

  const setCategoryItem = (item) => {
    setSelectedCategory(item);
    props.setCategoryData(item);
  };
  if (categories) {
    categoriesSection = categories.map((item) =>
      selectedCategory === item ? (
        <li>
          <a href="/#" role="button" onClick={() => setCategoryItem(item)}>
            <b>{item}</b>
          </a>
        </li>
      ) : (
        <li>
          <a href="/#" role="button" onClick={() => setCategoryItem(item)}>
            {item}
          </a>
        </li>
      )
    );
  } else {
    if (categoriesSection === null) {
      if (errorMessage !== "") {
        categoriesSection = <li className="error-text">{errorMessage}</li>;
      } else {
        categoriesSection = <li>Loading...</li>;
      }
    } else {
      categoriesSection = <li>Loading...</li>;
    }
  }
  const setMenuVisibleValue = () => {
    const menuVisibleValue = menuVisible;
    setMenuVisible(!menuVisibleValue);
  };
  allProdSection =
    selectedCategory === "" ? (
      <li>
        <a href="/#" onClick={() => setCategoryItem("")}>
          <b> All Products</b>
        </a>
      </li>
    ) : (
      <li>
        <a href="/#" onClick={() => setCategoryItem("")}>
          All Products
        </a>
      </li>
    );
  menu = menuVisible ? (
    <ul>
      {allProdSection}

      {categoriesSection}
    </ul>
  ) : (
    <ul className="ul-display-gone">
      {allProdSection}

      {categoriesSection}
    </ul>
  );
  return (
    <>
      <button className="menu-navbar" onClick={setMenuVisibleValue}>
        <i class="fa-solid fa-bars"></i> Browse Categories
      </button>
      <div className="navbar">{menu}</div>
    </>
  );
};
export default NavbarCategories;
