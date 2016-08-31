'use strict'
//Connect to Redis to get queue of people who need to be reminded
var redis = require('./db/redis.js');


//Configure a Twilio client
var client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);


redis.lrangeAsync(["verification:", 0,-1]).then(function (verification) {
  //We're gonna loop through the number of reminders in the queue, but we're not using the reminders we got back from the queue
  for (var i = 0; i <= verification.length; i++) {
    //This operation pulls one out of the queue, so that if we have multiple processes working on the same queue we need to only operate on messages that have not already been removed from the queue.
    redis.lpopAsync(["verification:"]).then(function (err, verification) {
      if (err) return;
      if (!verification) process.exit(0); //if multiple workers are processing the queue, we will eventually get null values - in that case, stop.
      let userCode = JSON.parse(verification).code;
      let userPhone = JSON.parse(verification).phone;
      
      redis.setAsync("verify:" + userPhone, userCode).then(function(){
        console.log("Rdis DB set");
        })
      redis.expireAsync("verify:" + userPhone, 5000).then(function(){
        console.log("TTL 5000");
        })
       

      client.sendMessage({

          to:'+1' + userPhone, // Any number Twilio can deliver to
          from: process.env.TWILIO_REMINDER_NUMBER, // A number you bought from Twilio and can use for outbound communication
          body: `Verification: ${verify.code}` // body of the SMS message

      }, function(err, responseData) { //this function is executed when a response is received from Twilio

          if (!err) { // "err" is an error received during the request, if any

              // "responseData" is a JavaScript object containing data received from Twilio.
              // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
              // http://www.twilio.com/docs/api/rest/sending-sms#example-1

              console.log(responseData.from); // outputs "+14506667788"
              console.log(responseData.body); // outputs "word to your mother."

          }
        });
      });
    };
  });
