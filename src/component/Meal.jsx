import React, { useState } from "react";
import Mealitem from "./Mealitem";

const Meal = () => {
  const [search, setSearch] = useState("");
  const [Mymeal, setMeal] = useState();
  const searchMeal = (event) => {
    if (event.key === "Enter") {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data)
          setMeal(data.meals);
        });
    }
  };
  return (
    <>
      <div className="main">
        <div className="heading">
          <h1>Meal Finder</h1>
        </div>
        <div className="searchBox">
          <input
            type="search"
            className="search-bar"
            placeholder="Search for meals or Keywords"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            onKeyPress={searchMeal}
          />
          {/* <button className="search-button">search</button>
          <button className="shuffle-button">shuffle</button> */}
        </div>
        <div className="result-heading">
          {/* {Mymeal.data.meals == null ? (
          <h4>Not Found</h4>
        ) : (
          //<h4>Search result for {Mymeal.data.strMeal}</h4>
          <h4>searched</h4>
        )} */}
        </div>
        ;
        <div className="container">
          {Mymeal == null ? (
            <div></div>
          ) : (
            Mymeal.map((res) => {
              return <Mealitem data={res} />;
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Meal;
