'use strict';

/**
 * @ngdoc service
 * @name workspaceApp.search
 * @description
 * # search
 * Factory in the workspaceApp.
 */
angular.module('workspaceApp')
  .factory('search', function ($resource) {
    // Service logic
    // ...

    // Public API here
   return $resource('https://api.edamam.com/search?q=radish&app_id=d70e34e6&app_key=b7fd5b2c3b3afdf3a0f82f96f7a91c4d&from=0&to=10&health=vegan', {}, {
      query: {
        method:'GET',
        params:{
          q: 'radish'
        },
        isArray:false
      }
    });
  });

/**
//Postman NodeJS Request snippet

var request = require("request");

var options = { method: 'GET',
  url: 'https://api.edamam.com/search',
  qs: 
   { q: 'radish',
     app_id: 'd70e34e6',
     app_key: 'b7fd5b2c3b3afdf3a0f82f96f7a91c4d',
     from: '0',
     to: '10',
     health: 'vegan' },
  headers: 
   { 'postman-token': '70b0d5bb-108e-236f-e41f-867e81af36b1',
     'cache-control': 'no-cache' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

*/