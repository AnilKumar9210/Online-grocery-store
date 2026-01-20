import React, { useEffect, useState } from "react";
import "./Home.css";
import { motion } from "framer-motion";
import Button from "../Utils/Button";
import fruit from "../assets/fruit.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const ITEMS_PER_VIEW = 8;
  const [showNext, setShowNext] = useState(false);

  const handleNav = () => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  };

  const handleNext = () => {
    setShowNext(true);
  };

  const handlePrev = () => {
    setShowNext(false);
  };

  const [categoryList, , setCategoryList] = useState([
    {
      background: fruit,
      title: "Fruits",
    },
    {
      background: fruit,
      title: "Fruits",
    },
    {
      background: fruit,
      title: "Fruits",
    },
    {
      background: fruit,
      title: "Fruits",
    },
    {
      background: fruit,
      title: "Fruits",
    },
    {
      background: fruit,
      title: "Fruits",
    },
    {
      background: fruit,
      title: "Fruits",
    },
    {
      background: fruit,
      title: "Fruits",
    },
    {
      background: fruit,
      title: "Fruits",
    },
    {
      background: fruit,
      title: "Fruits",
    },
    {
      background: fruit,
      title: "Fruits",
    },
  ]);

  const isFirstPage = !showNext;
  const isLastPage = showNext || categoryList.length <= ITEMS_PER_VIEW;

  return (
    <motion.div
      className="home"
      initial={{ bottom: 10, opacity: 0 }}
      animate={{ bottom: 0, opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <motion.div
        className="showcase"
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="showcase-text">
          <span id="free">Free Delivery</span>
          <h1>
            {" "}
            <span>Fresh Groceries</span>
            <span style={{ color: "green" }}>Delivered to you</span>
          </h1>
          <p>
            Get-farm-fresh organic products delivered to your door step in under
            20 minutes.Quality you can taste
          </p>
          <div className="buttons">
            <Button text={"Shop Now"} />
            <Button text={"Learn More"} bgColor={"white"} />
          </div>
        </div>
        <div className="showcase-bg">{/* <img src={bg} alt="" /> */}</div>
      </motion.div>
      <div className="category">
        <div className="category-heading">
          <h3>Shop by Category</h3>
          <div className="flex">
            <span
              className="view"
              onClick={!isFirstPage ? handlePrev : undefined}
              style={{ opacity: isFirstPage ? 0.5 : 1 }}
            >
              {"<"} prev
            </span>
            {categoryList.length > ITEMS_PER_VIEW && <span
              className="view"
              onClick={!isLastPage ? handleNext : undefined}
              style={{ opacity: isLastPage ? 0.5 : 1 }}
            >
              next {">"}
            </span>}
            
          </div>
        </div>
        <motion.div
          className="category-list"
          key={showNext} // forces animation
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {categoryList
            .slice(
              showNext ? ITEMS_PER_VIEW : 0,
              showNext ? categoryList.length : ITEMS_PER_VIEW,
            )
            .map((item, index) => (
              <div className="category-item" key={index}>
                <motion.img
                  src={item.background}
                  alt="fruits"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <span onClick={handleNav}>Fruits</span>
              </div>
            ))}
          {/* {categoryList.map((category,index)=>(
                    <div className="category-item" key={index} style={{backgroundImage:`url(${category.background})`}}>
                        <span>{category.title}</span>
                    </div>
                ))} */}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
