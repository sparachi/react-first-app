import React from "react";
import "./card-list.styles.css";
import { Card } from "../card/card.component";

export const CardList = (props) => {
  return (
    <div className="card-list">
        {props.monsters.map((monster) => (
            <div className="card-container">
                <Card key={monster.id} monsterData={monster} ></Card>
            </div>
        ))}
        <br />
        <br />
        {props.children}
    </div>
  );
};
