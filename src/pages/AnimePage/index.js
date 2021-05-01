import React from "react";
import { useHistory } from "react-router";

import "./style.scss";

import Header from "../../components/header";

export default function AnimePage() {
  const history = useHistory();
  const { top_upcoming, top_airing } = history.location.state;
  console.log(top_airing, top_upcoming);
  return (
    <div>
      <Header />
      <h2>Top Airing</h2>
      {top_airing.top.map(({ mal_id, title }) => (
        <div key={mal_id} style={{ color: "white" }}>
          {title}
        </div>
      ))}
    </div>
  );
}
