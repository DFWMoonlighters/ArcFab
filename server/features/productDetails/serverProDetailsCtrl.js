module.exports = {

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
        req.app.get('db')
          .post_order(qty, a, b, c, d, hem, man, gauge, color)
            .then( response => {
              res.status(200).json( response )
            })
            .catch( err => {
              console.log( err )
            })
    }

}
