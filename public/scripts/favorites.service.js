angular.module("gifApp").service("FavoritesService", [
  "$http",
  function($http) {
    console.log("FavoritesService loaded");


    this.favoriteCount = 0;

    // some way to send a post request to our server
    this.saveFavorite = function(favorite) {
      // alternative method
      // return $http({
      //   method: 'POST',
      //   data: favorite
      // }).then(...);
      return $http.post("/favorites", favorite).catch(function(err) {
        console.log("Error saving favorite", err);
      });
    };

    this.getFavorites = function() {
      return $http
        .get("/favorites")
        .then(function(response) {
          return response.data;
        })
        .catch(function(err) {
          console.log("Error getting favorites", err);
        });
    };
  }
]);
