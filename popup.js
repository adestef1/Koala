// documentation on the chrome.tabs API: https://developer.chrome.com/extensions/tabs
chrome.tabs.query({'active': true}, function (tabs) {
    document.getElementById('savedLinks').innerHTML = tabs[0].url;

    
    var Twit = require('twit');

    // twit is Twitter's API client for node
    // EXTRA: more on Twit:
    // https://github.com/ttezel/twit/blob/master/README.md
    // https://github.com/ttezel/twit

    // install node.js
    // do an 'npm install twit'

    // generate keys
    // 1. go to https://apps.twitter.com/
    // 2. log in with your twitter account
    // 3. go to settings, mobile, add phone number -- you will be unable to use the
    //    Twitter API if your account is not connected with your phone
    // 4. go to keys and access tokens
    // 5. copy and paste your consumer key/consumer_secret
    // 6. click on generate access tokens and copy and paste them
    //    here as well

    var T = new Twit({
      consumer_key:         'ysKcoO57grOKocyq3eCxz0124',
      consumer_secret:      'SBvEJZXY73ChVl4d3lHkdhLuzn6HswTtok05lp6BxYCcyjTXk2',
      access_token:         '918558213292871680-yVHzaBz3ofnkXbO3k5xBGkM35UmivKd',
      access_token_secret:  '7Y0M49KdlovG5hWvreLmXmJDybEaVpcZ6sQATX2EimXMo',
      timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    })

    //  tweet your link (update your status)

    T.post('statuses/update', { status: "HELLO WORLd" }, { mode: 'no-cors' }, function(err, data, response) {
      console.log(data)
    })
    

});
