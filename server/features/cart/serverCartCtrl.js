module.exports = {

    getCart: ( req, res, next ) => {
      // will need a customer_id passed to .get_cart(HERE)
        req.app.get('db')
            .get_cart()
                .then( order => {
                    res.status(200).json( order )
                })
                .catch( err => {
                    console.log( err )
                })
    }

}
