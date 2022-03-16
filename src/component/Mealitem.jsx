import React from "react";

const Mealitem = (getMeal) => {
  return (
    <div id="main">
        <div className="image">
          <img src={getMeal.data.strMealThumb} alt={getMeal.data.strMeal} />
          <h2>{getMeal.data.strMeal} </h2>         
        </div>
      <div id="info">
        <div className="food-name">
          <h2>{getMeal.data.strMeal} </h2>
        </div>
        <div className="image2">
          <img src={getMeal.data.strMealThumb} alt={getMeal.data.strMeal} />
        </div>
        <div className="food-country">
          <p>{getMeal.data.strArea}</p>
        </div>
        <div className="instruction">
          <p>{getMeal.data.strInstruction}</p>
        </div>
        <div className="ingredients">
          <div>
            <h2>Ingredients</h2>
          </div>
          <div>{getMeal.data.strIngredient}</div>
        </div>
        <div className="measure">{getMeal.data.strMeasure}</div>
        <div className="tags">{getMeal.data.strTags}</div>
        <div className="youtube">{getMeal.data.strYoutube}</div>
      </div>
    </div>
  );
};

export default Mealitem;
