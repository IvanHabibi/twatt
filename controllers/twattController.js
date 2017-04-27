
var method = {}

var model = require('../models/twitterkeys');

method.searchTwatt = (req, res) => {
  model.search(req.params.place,function(data){
    res.send(data)
  })

}

method.recentTwatt = (req, res) => {

  model.recent(function(data){
    res.send(data)
  })

}


module.exports = method;
