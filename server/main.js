import { Meteor } from "meteor/meteor";
import { Players } from "./../imports/api/players";

Meteor.startup(function() {

  let square = function (x) {
    return x * x;
  }

  console.log(square(10));
});
