angular.module("gifApp").controller("SearchController", [
  "GiphyService",
  "FavoritesService",
  function(GiphyService, FavoritesService) {
    console.log("loaded gif controller");

    var vm = this;

    vm.FavoritesService = FavoritesService;
    vm.results = [];

    updateFavoriteCount();

    function updateFavoriteCount() {
      FavoritesService.getFavorites().then(function(favorites){
        FavoritesService.favoriteCount = favorites.length;
      })
    }

    this.random = function() {
      GiphyService.random().then(function(gif) {
        vm.results = [];
        vm.results.push({ url: gif.image_url });
      });
    };

    this.search = function() {
      GiphyService.search(vm.q).then(function(gifs) {
        vm.results = gifs.map(function(gif) {
          return { url: gif.images.fixed_height.url };
        });

        // alternative to map
        // for (var i = 0; i < gifs.length; i++ ) {
        //   var gif = gifs[i];
        //   vm.results.push({ url: gif.images.fixed_height.url })
        // }
        console.log(vm.results);
      });
    };

    this.createFavorite = function(favorite) {
      FavoritesService.saveFavorite(favorite).then(function(){
        console.log('Saved a real favorite');
        updateFavoriteCount();
      })
    }
  }
]);
