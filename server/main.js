import { Meteor } from "meteor/meteor";
import { Players } from "./../imports/api/players";

Meteor.startup(function() {
  Players.insert({
    name: "Sambusenda",
    score: 3
  });
  console.log(Players.find().fetch());
});
