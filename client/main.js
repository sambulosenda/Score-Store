import React from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";

const players = [
  {
    _id: "1",
    name: "Sambulo",
    score: 99
  },
  {
    _id: "2",
    name: "Senda",
    score: 91
  },
  {
    _id: "3",
    name: "Michael",
    score: -13
  }
];

const renderPlayers = function(playersList) {
  return playersList.map(function(player) {
    return <p key={player._id}>{player.name} has {player.score} points</p>;
  });
};

Meteor.startup(function() {
  let title = "Score Store Keep";
  let name = "Sambulo Senda";
  let jsx = (
    <div>
      <h1>{title}</h1>
      <p>I am looking at this code</p>
      {renderPlayers(players)}
    </div>
  );
  ReactDOM.render(jsx, document.getElementById("app"));
});
