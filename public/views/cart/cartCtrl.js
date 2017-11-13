angular.module('app')
  .controller("cartCtrl", function($scope, cartSrv) {
    let id = Cookies.get('arcfab');
     cartSrv.getCart()
      .then(res => {
        let items = res.data.filter(elem => {
          return elem.user_id === id;
        });
        $scope.cart = items;
      })
      .catch(err => {
        console.log(err)
        return err;
      })

  });
