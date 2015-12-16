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
      _.templateSettings = {
        interpolate: /\{\{(.+?)\}\}/g
      };
      this.template = _.template($('#home_tpl').html());
    },
    el : '#home',
//    template: _.template("Bonjour <%- page %>"),
    render: function(){
//      console.log();
      console.log('render HOME !');
      this.$el.html(this.template({page : 'home'}));
      return this;
//      $('#home').html('test');
//      this.$el.html();
    }
  });
})();
