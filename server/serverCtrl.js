module.exports = {

  getProducts: (req, res) => {
    let db = req.app.get('db');
    db.roof_systems()
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }


}
