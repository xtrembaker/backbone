/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app = app || {};

(function($){
  
  _.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
  };
  
  $(document).ready(function(){
    console.log('Load app !');
    app.router = new app.Router();
  
    app.router.on("route:page1", function(params) {
      console.log('route page1 event called !');
    });
    
    Backbone.history.start({pushState: true});
//  history.pushState({}, "page 2", "bar.html");
//  , root : '/this-is-the-root-url'
  // Force redirect to /this-is-the-home-url and trigger routing action linked
    app.router.navigate('/', {trigger: true, replace:true});
  });
  // Activate  pushState
  
//  app.router.navigate('toto', {trigger: true, replace:true});

  window.addEventListener('popstate', function(evt){
    console.log(evt);
  });
  
})(jQuery);