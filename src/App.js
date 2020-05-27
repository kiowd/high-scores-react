import React from "react";
import "./styles.css";
import HighScoreTable from "./HighScoreTable";
import WorldWide from "./WorldWide";

import allCountryScores from "./score.js";

export default function App() {
  return (
    <React.Fragment>
      <div className="App text-warning">
        <strong style={{ fontSize: 40 }}>High Scores per Country</strong>
      </div>
      <WorldWide allCountryScores={allCountryScores} />
      <HighScoreTable allCountryScores={allCountryScores} />
    </React.Fragment>
  );
}
