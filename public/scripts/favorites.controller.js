angular.module("gifApp").controller("FavoritesController", [
  "FavoritesService",
  function(FavoritesService) {
    console.log("FavoritesController loaded");

    var vm = this;
    vm.FavoritesService = FavoritesService;
    
    // favorite data goes here
    vm.favorites = [];

    FavoritesService.getFavorites().then(function(favorites){
      vm.favorites = favorites;
    });
  }
]);
