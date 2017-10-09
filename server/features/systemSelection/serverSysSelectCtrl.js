module.exports = {

    getSystems: function( req, res, next ) {
        req.app.get('db')
            .get_systems([])
                .then( systems => {
                    res.status(200).json( systems )
                })
                .catch( err => {
                    console.log( err )
                })
    }

}