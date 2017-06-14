define([
  'jquery',
  'underscore',
  'backbone',
  'model/institutions',
  'view/institutionView'], function($, _, Backbone, Institutions, InstitutionView){

    var InstitutionsView = Backbone.View.extend({

      render: function(){
        var self = this;

        this.model.each(function(institution){
          var institutionView = new InstitutionView({model: institution});
          self.$el.append(institutionView.render().$el)
        })
      }
    });

    return InstitutionsView
})
