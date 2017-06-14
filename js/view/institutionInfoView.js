define([
  'jquery',
  'underscore',
  'backbone',
  'model/institution'], function($, _, Backbone, Institution){

    var InstitutionInfoView = Backbone.View.extend({
      render: function(){
        var name = `<h1>${this.model.get("name")}</h1>`;
        var address = `<h4>Address: ${this.model.get("address")}</h4>`;
        this.$el.html(name + address);
        return this;
      }
    });

    return InstitutionInfoView
})
