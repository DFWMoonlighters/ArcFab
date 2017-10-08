angular.module('app')
  .service('systemSelectionSrv', function($http) {

    this.getProducts = (req, res) => {
      return $http.get('http://localhost:3001/api/getProducts')
    }


  });
