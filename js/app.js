define([
  'jquery',
  'underscore',
  'backbone',
  'model/institution',
  'view/institutionView',
  'model/institutions',
  'view/institutionsView',
  'view/institutionInfoView'], function($, _, Backbone, Institution, InstitutionView,
    Institutions, InstitutionsView, InstitutionInfoView){

    var initialize = function(){
      var institutions = new Institutions([
        new Institution({name: "New Jersey State Lunatic Asylum",
                        address: "101 Sullivan Way, Trenton, NJ 08628"}),
        new Institution({name: "London’s Bethlem Royal Hospital",
                        address: "Monks Orchard Rd, Beckenham BR3 3BX, UK"}),
        new Institution({name: "Topeka State Hospital",
                        address: "Topeka, KS 66606"}),
        new Institution({name: "Pennhurst Asylum",
                        address: "100 Commonwealth Dr, Spring City, PA 19475"})
      ])

      var institutionsView = new InstitutionsView({el: "#institutionsDiv", model: institutions})
      institutionsView.render();

      var institution = new Institution({name: "name", address: "Address"});

      var institutionInfoView = new InstitutionInfoView({el: "#institutionDiv", model: institution});
      institutionInfoView.render();

    }

    return {
      initialize: initialize
    }
});
