define([
  'jquery',
  'underscore',
  'backbone',
  'model/institution',
  'view/institutionView',
  'model/institutions',
  'view/institutionsView',
  'view/institutionInfoView',
  'router/AppRouter'], function($, _, Backbone, Institution, InstitutionView,
    Institutions, InstitutionsView, InstitutionInfoView, AppRouter){

    var initialize = function(){
      var router = new AppRouter();
      Backbone.history.start();
      var institutions = new Institutions([
        new Institution({name: "King Piccolo King Piccolo King Piccolo", address: "Dog house on the Left"}),
        new Institution({name: "Majin Vegeta King Piccolo King Piccolo", address: "Dog house on the Right"}),
        new Institution({name: "Lord Beerus King Piccolo King Piccolo", address: "Dog house on the Left"})
      ])

      var institutionsView = new InstitutionsView({el: "#institutions", model: institutions})
      institutionsView.render();
    }

    var institution = new Institution({name: "name", address: "Address"});

    var institutionInfoView = new InstitutionInfoView({el: "#institution", model: institution});
    institutionInfoView.render();


    return {
      initialize: initialize
    }
});
