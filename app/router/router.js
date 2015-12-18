/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// declare app if not exists
var app = app || {};

// Avoid scope pollution 
(function(){
  app.Router = Backbone.Router.extend({
    routes : {
//      "this-is-the-home-url" : "home",
      "" : "home",
      "addBook" : "addBook"
    },
    home : function(){
      console.log('home route loaded !');
      var homeView = new app.HomeView();
      homeView.render();
    },
    addBook : function(){
      var addBookView = new app.AddBookView();
      addBookView.render();
    }
  });
})();