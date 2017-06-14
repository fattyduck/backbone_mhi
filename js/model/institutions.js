define([
  'jquery',
  'underscore',
  'backbone',
  'model/institution'], function($, _, Backbone, Institution){

    var Institutions = Backbone.Collection.extend({
      model : Institution
    })

    return Institutions
})
