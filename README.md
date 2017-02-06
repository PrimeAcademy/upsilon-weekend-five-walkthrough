Example TODO list for tackling this project

Assumes we already had a working client side app for getting random gifs and searching for gifs

1. Create a database
2. Add routes on the server for interacting with that DB
  - GET route, for listing all favorites
  - POST route, for adding a new favorite
  - Register this router in the server.js file
3. Create someway to save a favorite
  - Add a Favorites service
    - with a method called saveFavorite to send the POST request to the server
  - Add FavoritesService as a dependency in SearchController
  - Create createFavorite method on controller that calls saveFavorite on service
  - Connect DOM and controller
    - ng-model on the comment box
    - ng-click on the favorite button
4. Favorites View
  - ngRoute installed and configured
  - favorites.html template
  - FavoritesController
5. Favorite Count on Search Page
  - Method on FavoritesService to get all the favorites
