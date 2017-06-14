define([
  'jquery',
  'underscore',
  'backbone',
  'model/institution',
  'view/institutionInfoView'], function($, _, Backbone, Institution, InstitutionInfoView){

    var InstitutionView = Backbone.View.extend({

      tagName: "button",
      className: "btn-primary",

      events:{
          "click": "onClick"
      },

      onClick: function(){
        var institution = new Institution({name: this.model.attributes.name, address: this.model.attributes.address})
        var institutionInfoView = new InstitutionInfoView({el: "#institutionDiv", model: institution});
        institutionInfoView.render();
      },

      render: function(){
        this.$el.html(this.model.get("name"));
        return this;
      }
    });

    return InstitutionView
})
