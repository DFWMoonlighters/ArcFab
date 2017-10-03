angular.module('app', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('adminPortal', {
        url:'/adminPortal',
        templateUrl: "views/adminPortal.html",
        controller: 'adminPortalCtrl'
      })
      .state('cart', {
        url:'/cart',
        templateUrl: "views/cart.html",
        controller: 'cartCtrl'
      })
      .state('checkout', {
        url:'/checkout',
        templateUrl: "views/checkout.html",
        controller: 'checkoutCtrl'
      })
      .state('landing', {
        url:'/landing',
        templateUrl: "views/landing.html",
        controller: 'landingCtrl'
      })
      .state('productDetails', {
        url:'/productDetails',
        templateUrl: "views/productDetails.html",
        controller: 'productDetailsCtrl'
      })
      .state('systemProducts', {
        url:'/systemProducts',
        templateUrl: "views/systemProducts.html",
        controller: 'systemProductsCtrl'
      })
      .state('systemSelection', {
        url:'/systemSelection',
        templateUrl: "views/systemSelection.html",
        controller: 'systemSelectionCtrl'
      })
      $urlRouterProvider
        .otherwise('/landing');
  })
