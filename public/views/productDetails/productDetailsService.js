angular.module('app')
  .service('productDetailsSrv', function( $http ) {

    this.getProductInfo = ( id ) => {
      return $http.get('/api/product/' + id)
    }

    this.submitOrder = ( order ) => {
      $http.post('/api/order', { order })
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    }

  });
