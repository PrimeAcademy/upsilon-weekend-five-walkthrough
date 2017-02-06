angular.module("gifApp", [ "ngRoute" ]).config([
  "$routeProvider",
  "$locationProvider",
  function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
      templateUrl: 'views/search.html',
      controller: 'SearchController as search'
    }).when('/faves', {
      templateUrl: 'views/favorites.html',
      controller: 'FavoritesController as fave'
    });

    $locationProvider.html5Mode(true);
  }
]);
