'use strict';

/**
 * @ngdoc function
 * @name virtualListApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the virtualListApp
 */
angular.module('virtualListApp')
  .controller('MainCtrl', function () {
    var dp = [];

    for (var i=0; i<1000000; i++) {
      dp.push({
        index: i,
        label: "label " + i,
        value: "value " + i
      });
    }

    this.dataProvider = dp;
    this.selectedOption = null;

    this.onSelect = function(option) {
      console.log(option);
    };
  });
