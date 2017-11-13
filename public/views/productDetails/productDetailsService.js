angular.module('app')
  .service('productDetailsSrv', function( $http ) {

    this.getProductInfo = ( id ) => {
      return $http.get('http://localhost:3001/api/product/' + id)
    }

    this.submitOrder = ( order ) => {
      $http.post('http://localhost:3001/api/order', { order })
        .then(response => {
          console.log('order submited', response)
        })
        .catch(error => {
          console.log(error)
        })
    }

  });
