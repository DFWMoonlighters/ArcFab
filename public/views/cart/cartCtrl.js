angular.module('app')
  .controller("cartCtrl", function($scope, cartSrv) {

     cartSrv.getCart()
      .then(res => {
        console.log(res.data)
        $scope.cart = res.data;
      })
      .catch(err => {
        console.log(err)
        return err;
      })

  });
