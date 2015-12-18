/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// declare app if not exists
var app = app || {};
// Avoid scope pollution 
(function(){
  app.AddBookView = Backbone.View.extend({
    initialize : function(){
      this.template = _.template($('#tpl_page1').html());
      this.$el = $('#content');
    },
    el : '#page1',
    render: function(){
      $('#content').html(this.template({page : 'page1'}));
      this.delegateEvents();
      return this;
    }
  });
})();


