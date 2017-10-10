angular.module('app')
  .service('systemSelectionSrv', function($http) {

    this.getSystems = () => {
      return $http.get('http://localhost:3001/api/systems');
    }



  });
