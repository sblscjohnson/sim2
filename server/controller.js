module.exports = {
  getHouses: (req, res) => {
    req.app.get('db').get_houses().then((houses) => {
    res.status(200).send(houses)
  }).catch((err) => {
    console.log('that was not very cash money of you')
    res.status(500).send('that was not very cash money of you')
  })
  },

  postHouse: (req, res) => {
    let {name, address, city, state, zipcode} = req.body;
    req.app.get('db').add_house([name, address, city, state, zipcode]).then(() => {
      res.status(200).send('all good')
    }).catch((err) => {
      console.log('post failure')
      res.status(500).send(zipcode)
    })
  },

  deleteHouse: (req, res) => {
    let {id} = req.params;
    req.app.get('db').delete_house(id).then(() => {
      res.sendStatus(200)
    }).catch((err) => {
      console.log('delete failure')
      res.status(500).send('delete failure')
    })
  }

}