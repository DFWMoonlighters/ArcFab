angular.module('app')
  .controller("systemProductsCtrl", function($scope, systemProductsSrv, $stateParams) {

    let system = $stateParams.system

    systemProductsSrv.getProducts( system )
      .then( res => {
        console.log( "getProducts response:", res ) 
        $scope.products = res.data
      })
      .catch( err => {
        console.log( "getProducts error:", err)
        return err
      })

  });
