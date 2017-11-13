angular.module('app')
  .controller("systemProductsCtrl", function($scope, systemProductsSrv, $stateParams) {

    console.log( "systemProductsCtrl stateParams:", $stateParams )

    let system = $stateParams.system
    console.log("systemProductCtrl system:", system)
    systemProductsSrv.getProducts( system )
      .then( res => {
        console.log( res ) 
        $scope.products = res.data
      })
      .catch( err => {
        console.log(err)
        return err
      })

  });
