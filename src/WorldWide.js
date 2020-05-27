import React from "react";

const WorldWide = ({ allCountryScores }) => {
  const sortScores = allCountryScores.map(score => {
    var max = score.scores.reduce(function (prev, current) {
      return (prev.s > current.s) ? prev : current
   });
    console.log(max);
  });

  return (
    <div className="card text-center" style={{ width: "100%" }}>
      <div className="card-header list-group-item text-white bg-dark">
        HIGH SCORES: WorldWide
      </div>
      {allCountryScores.map(score => {
        var max = score.scores.reduce(function (prev, current) {
          return (prev.s > current.s) ? prev : current
       });
        return (
        <ul className="list-group" style={{ border: "2px solid black" }} >
        <li className="list-group-item" >
                    <div class="d-flex w-100 justify-content-around">
                      {max.n}
                      <span className="badge badge-pill badge-success">
                        {max.s}
                      </span>
                    </div>
                  </li>
        </ul>

      )})

       }
    </div>
  );
};

export default WorldWide;
