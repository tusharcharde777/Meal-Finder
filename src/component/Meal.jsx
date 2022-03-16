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
        </div>
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
