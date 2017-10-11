angular.module('app')
  .service('cartSrv', function($http) {

    this.getCart = () => {
      return $http.get('http://localhost:3001/api/cart');
    }

  });
