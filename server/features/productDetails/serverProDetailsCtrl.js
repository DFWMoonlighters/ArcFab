module.exports = {
    
    getProductInfo: function( req, res, next ) {

      let productId = req.params.id
      req.app.get('db')
        .get_product_info( productId )
          .then( response => {
            res.status(200).json( response )
          })
          .catch( err => {
            console.log( "getProductInfo error:", err )
          })

    },

    postOrder: function( req, res, next ) {
      let order = req.body.order,
          a = order.dimension.a,
          b = order.dimension.b,
          c = order.dimension.c,
          d = order.dimension.d,
          man = order.metal.manufacturer,
          gauge = order.metal.gauge,
          color = order.metal.color,
          hem = order.hem,
          qty = order.quantity;
          userId = order.userID;
          addInfo = order.additionalInfo;
          // need to set it up so if the customer will provide the metal,
          // man will be "Customer Provided" instead of undefined...
        req.app.get('db')
          .post_order(qty, a, b, c, d, hem, man, gauge, color, userId, addInfo)
            .then( response => {
              res.status(200).json( response )
            })
            .catch( err => {
              console.log( "postOrder error:", err )
            })
    }

}
