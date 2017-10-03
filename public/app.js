angular.module('app', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('adminPortal', {
        url:'/adminPortal',
        templateUrl: "views/adminPortal.html",
      })
      .state('cart', {
        url:'/cart',
        templateUrl: "views/cart.html",
      })
      .state('checkout', {
        url:'/checkout',
        templateUrl: "views/checkout.html",
      })
      .state('landing', {
        url:'/landing',
        templateUrl: "views/landing.html",
      })
      .state('productDetails', {
        url:'/productDetails',
        templateUrl: "views/productDetails.html",
      })
      .state('systemProducts', {
        url:'/systemProducts',
        templateUrl: "views/systemProducts.html",
      })
      .state('systemSelection', {
        url:'/systemSelection',
        templateUrl: "views/systemSelection.html",
      })
      $urlRouterProvider
        .otherwise('/landing');
  })
