require('dotenv').config()
const OAuth = require('oauth');
var model = {}

var oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    process.env.CONSUMER_KEY,
    process.env.CONSUMER_SECRET,
    '1.0A',
    null,
    'HMAC-SHA1'
);


model.search = function(search, next){
    oauth.get(
        'https://api.twitter.com/1.1/trends/place.json?id='+search,
        process.env.TOKEN, //test user token
        process.env.SECRET, //test user secret
        function(e, data) {
            next(data);
        });
}

model.recent = function(next){
  oauth.get(
      'https://api.twitter.com/1.1/statuses/user_timeline.json',
      process.env.TOKEN, //test user token
      process.env.SECRET, //test user secret
      function(e, data) {
        console.log(data);
          next(data);
      });

}







module.exports = model;
