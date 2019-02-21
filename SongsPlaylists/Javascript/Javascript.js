var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
  $http.get("../data/songs.php");
  .then(function(response) {
    $scope.myWelcome = response.data.songs;
  });
});