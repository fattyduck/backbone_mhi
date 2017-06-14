define([
  'jquery',
  'underscore',
  'backbone',
  'model/institution'], function($, _, Backbone, Institution){

    var InstitutionView = Backbone.View.extend({
      render: function(){
        this.$el.html(this.model.get("name"));
        return this;
      }
    });

    return InstitutionView
})
