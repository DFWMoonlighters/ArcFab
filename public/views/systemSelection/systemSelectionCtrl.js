angular.module('app')
  .controller("systemSelectionCtrl", function($scope, systemSelectionSrv) {

    systemSelectionSrv.getProducts()
      .then(res => {
        $scope.productList = res.data;
      })
      .catch(err => {
        console.log(err)
        return err;
      })

  });
