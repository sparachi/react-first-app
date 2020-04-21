import React from "react";
import "./card.styles.css";

export const Card = (props) => {
  return (
      <div className="card-container">
            <img alt="monster image" src={`https://robohash.org/${props.monsterData.id}?set=set2&size=180x200`}></img>
            <h1>{props.monsterData.name}</h1>
            <h2>{props.monsterData.email}</h2>
      </div>
  );
};
