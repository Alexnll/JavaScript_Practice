// unfinish
const redis = require('redis');
const redisClient = redis.createClient();
const util = require('util');

redisClient.on('ready', function(){
    console.log('Successfully connect to redis;');
});

redisClient.on('error', function(){
    console.log('Connection error;');
});

// string
addStr = function(keyValue, strValue){
    redisClient.set(keyValue, strValue);
    console.log('Successfully set '+keyValue+'-'+strValue);
}

showStr = function(keyValue){
    console.log(keyValue+'-'+redisClient.set(keyValue));
}

// Set
newUser = function(userGroup, userName){
    redisClient.sadd(userGroup, newUser);
}
