angular.module('app', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider
        .otherwise('/landing');
    
    $stateProvider
      .state('adminPortal', {
        url:'/adminPortal',
        templateUrl: "./views/adminPortal/adminPortal.html",
        controller: 'adminPortalCtrl'
      })
      .state('cart', {
        url:'/cart',
        templateUrl: "./views/cart/cart.html",
        controller: 'cartCtrl'
      })
      .state('checkout', {
        url:'/checkout',
        templateUrl: "./views/checkout/checkout.html",
        controller: 'checkoutCtrl'
      })
      .state('landing', {
        url:'/landing',
        templateUrl: "./views/landing/landing.html",
        controller: 'landingCtrl'
      })
      .state('productDetails', {
        url:'/productDetails',
        templateUrl: "./views/productDetails/productDetails.html",
        controller: 'productDetailsCtrl'
      })
      .state('systemProducts', {
        url:'/systemProducts/:system',
        templateUrl: "./views/systemProducts/systemProducts.html",
        controller: 'systemProductsCtrl'
      })
      .state('systemSelection', {
        url:'/systemSelection',
        templateUrl: "./views/systemSelection/systemSelection.html",
        controller: 'systemSelectionCtrl'
      })
    
  })
