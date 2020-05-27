import React, { useState } from "react";

const HighScoreTable = ({ allCountryScores }) => {
  const countrySortByName = allCountryScores.sort(function(a, b) {
    return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
  });
  // const sortScores = allCountryScores.map(score =>
  //   score.scores.sort(function(a, b) {
  //     return b.s - a.s;
  //   })
  // );

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

  return allCountryScores.map((country, index) => {
    return (
      <React.Fragment>
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
        <div className="card text-center" style={{ width: "100%" }}>
          <div className="card-header list-group-item-info" key={index}>
            HIGH SCORES: &nbsp; &nbsp; &nbsp; {country.name}
          </div>

          <ul
            className="list-group"
            style={{ border: "2px solid black" }}
            // key={index}
          >
            {country.scores.map((score, index) => {
              return (
                <li className="list-group-item" key={index}>
                  <div class="d-flex w-100 justify-content-around">
                    {score.n}
                    <span className="badge badge-pill badge-success">
                      {score.s}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </React.Fragment>
    );
  });
};

export default HighScoreTable;
