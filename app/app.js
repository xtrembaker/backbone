/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app = app || {};

(function($){
  
  $(document).ready(function(){
    app.router = new app.Router();
  
    app.router.on("route:toto", function(page) {
      console.log('la !');
    });
    
    Backbone.history.start({pushState: true});
//  history.pushState({}, "page 2", "bar.html");
//  , root : '/this-is-the-root-url'
  // Force redirect to /this-is-the-home-url and trigger routing action linked
    app.router.navigate('this-is-the-home-url', {trigger: true, replace:true});
  });
  // Activate  pushState
  
//  app.router.navigate('toto', {trigger: true, replace:true});

  window.addEventListener('popstate', function(evt){
    console.log(evt);
  });
  
})(jQuery);