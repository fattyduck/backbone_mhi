define([
  'jquery',
  'underscore',
  'backbone',
  'model/institution'], function($, _, Backbone, Institution){

    var InstitutionView = Backbone.View.extend({

      tagName: "button",
      className: "btn-primary",

      events:{
          "click": "changeRoute"
      },

      changeRoute: function(){
        Backbone.history.navigate(this.model.attributes.name)
      },

      render: function(){
        this.$el.html(this.model.get("name"));
        return this;
      }
    });

    return InstitutionView
})
