/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// declare app if not exists
var app = app || {};
// Avoid scope pollution 
(function(){
  app.HomeView = Backbone.View.extend({
    initialize : function(){
      this.template = _.template($('#tpl_home').html());
      this.$el = $('#content');
    },
    events : {
      'click #addBookPage' : 'addBookPage'
    },
    render: function(){
      console.log('render HOME !');
      $('#content').html(this.template({page : 'home'}));
      this.delegateEvents();
      return this;
    },
    addBookPage : function(evt){
      evt.preventDefault();
      console.log('go to addBook page');
      return app.router.navigate('addBook', {trigger: true});
    }
  });
})();
