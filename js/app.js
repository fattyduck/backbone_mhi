define([
  'jquery',
  'underscore',
  'backbone',
  'model/institution',
  'view/institutionView',
  'model/institutions',
  'view/institutionsView'], function($, _, Backbone, Institution, InstitutionView, Institutions, InstitutionsView){

    var initialize = function(){
      var institution = new Institution({name: "name"});

      var institutionView = new InstitutionView({el: "#institution", model: institution});
      institutionView.render();

      var institutions = new Institutions([
        new Institution({name: "1"}),
        new Institution({name: "2"}),
        new Institution({name: "3"})
      ])

      var institutionsView = new InstitutionsView({el: "#institutions", model: institutions})
      institutionsView.render();
    }

    return {
      initialize: initialize
    }
});
