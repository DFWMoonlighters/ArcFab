module.exports = {

    getProducts: (req, res, next) => { 
        let system = req.params.system
        req.app.get('db')
            .get_products( system )
                .then( response => {
                  res.status(200).json( response )
                })
                .catch( err => {
                  console.log( err )
                })
    }

}