import React, { useState } from "react";

const Button = ({ allCountryScores }) => {
  const [all, setAll] = useState(allCountryScores);

  console.log(all);

  const handleDescending = e => {
    console.log("you clicked Des");
    setButtonText(false);

    setAll(
      allCountryScores.map(score =>
        score.scores.sort(function(a, b) {
          return b.s - a.s;
        })
      )
    );
  };

  const handleAscending = e => {
    console.log("you clicked Ase");
    setButtonText(true);

    setAll(
      allCountryScores.map(score =>
        score.scores.sort(function(a, b) {
          return a.s - b.s;
        })
      )
    );
  };

  const [buttonText, setButtonText] = useState(true);

  return (
    <div className="text-center">
      {buttonText ? (
        <button
          onClick={handleDescending}
          type="button"
          class="btn btn-primary btn-block"
        >
          Descending
        </button>
      ) : (
        <button
          onClick={handleAscending}
          type="button"
          class="btn btn-primary btn-block"
        >
          Ascending
        </button>
      )}
    </div>
  );
};

export default Button;
