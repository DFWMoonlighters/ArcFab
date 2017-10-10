angular.module('app')
  .controller("systemSelectionCtrl", function($scope, systemSelectionSrv) {

    systemSelectionSrv.getSystems()
      .then(res => {
        console.log(res)
        $scope.productList = res.data;
      })
      .catch(err => {
        console.log(err)
        return err;
      })


  });
