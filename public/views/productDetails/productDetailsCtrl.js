angular.module('app')
  .controller("productDetailsCtrl", function($scope, productDetailsSrv, $stateParams) {

    $scope.order = {
      metal: {
        manufacturer: "",
        gauge: 0,
        color: "",
      },
      dimension: {
        a: "",
        b: "",
        c: "",
        d: ""
      },
      quantity: "",
      hem: "",
      additionalInfo: ""
    }

    // Gets info on product selected
    // Will not work until the db is set up.
    productDetailsSrv.getProductInfo($stateParams.id)
      .then( product =>{
        $scope.product = product;
      })
      .catch(err => {
        console.log('productDetailCtrl getProductInfo: ', err)
      })

    // Button labels will change based on selection
    $scope.manufacturer = "Manufacturer";
    $scope.gauge = "Gauge";
    $scope.color = "Color";
    $scope.hem = "Open or Closed";

    // Disables drop downs until a certain action is performed
    $scope.metalSelection = true;
    $scope.gaugeSelection = true;
    $scope.colorSelection = true;

    // Dimension input boxes
    // Need to add some way to change qty of boxes based on product

    // Submit Order
    $scope.submitOrder = (order) => {
      order.hem = $scope.hem;
      order.userID = Cookies.get('arcfab');
      console.log("submited order:", order);
      productDetailsSrv.submitOrder(order)
    }

  });
