require.config({
    paths:{
        jquery:'lib/jquery-min',
        underscore:'lib/underscore-min',
        backbone:'lib/backbone-min'
    }
});
require(['app'], function (App) {
    App.initialize();
});
