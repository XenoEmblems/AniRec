// Example Movie Model

App.Models.MovieInfo = Backbone.Model.extend ({

  defaults: {
    title: "The Room"
    poster: "http://nerdist.com/wp-content/uploads/2014/07/Tommy_Wiseau_in_The_Room.jpg",
    rated: "R",
    genre: "Intentional Tragedy turned Comedy",
    plot: "A space alien stars, directs, and produces a move about heartbreak, tuxedoes, and football",
    imdbRating: "11",
    Type: "movie",
    Pitch: "This should not show untill it hits the User Page"
  }
});