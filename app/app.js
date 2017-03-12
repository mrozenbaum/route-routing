"use strict";
console.log("app.js file");
var app = angular.module('RouteApp', ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider.
  when('/route1', {
    templateUrl: "partials/route1.html",
    controller: "Route1Ctrl"
  }).
  when('/route66', {
    templateUrl: "partials/route66.html",
    controller: "Route66Ctrl"
  }).
  otherwise('/');
});