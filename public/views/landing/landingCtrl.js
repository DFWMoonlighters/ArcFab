angular.module('app')
  .controller("landingCtrl", function($scope, landingSrv) {

    var cookie = Cookies.get('arcfab');
    if (cookie === undefined) {
      Cookies.set('arcfab', Math.random(), { expires: 7 })
    }

  });
