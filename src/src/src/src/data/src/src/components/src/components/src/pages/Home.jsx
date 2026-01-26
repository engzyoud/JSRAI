import React from "react";
import { Link } from "react-router-dom";

export default function Home({ t }) {
  return (
    <div className="card">
      <h1>{t.homeTitle}</h1>
      <p>{t.homeDesc}</p>
      <Link to="/quiz">
        <button className="btn">{t.startBtn}</button>
      </Link>
    </div>
  );
}
