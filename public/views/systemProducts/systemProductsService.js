angular.module('app')
  .service('systemProductsSrv', function( $http ) {

    this.getProducts = ( system ) => {
      console.log("systemProductSrv system:", system)
      return $http.get('http://localhost:3001/api/products/' + system)
    }

  });
