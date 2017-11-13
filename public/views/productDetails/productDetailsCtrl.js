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

    const productId = $stateParams.id

    productDetailsSrv.getProductInfo( productId )
      .then( product =>{
        console.log( "productDetailsCtrl product:", product.data[0] )
        $scope.product = product.data[0];
      })
      .catch(err => {
        console.log('productDetailCtrl getProductInfo error:', err)
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
      console.log("submited order:", order);
      productDetailsSrv.submitOrder(order)
    }

  });
