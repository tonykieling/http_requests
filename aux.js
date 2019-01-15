// var request = require('request');

// request('https://sytantris.github.io/http-examples/', function(err, response, body) {
//   if (err) throw err;
//   console.log('Response Status Code:', response.statusCode);
//   console.log(body);
// });

var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {
         throw err; 
       })
       .on('response', function (response) {         
         console.log('Response Status Code: ', response.statusCode);
         console.log('Response Status Message: ', response.statusMessage);
         console.log('Response Content Type: ', response.headers['content-type']);
         console.log('Download complete.');

       })
       .pipe(fs.createWriteStream('./future.jpg'));

       console.log('Downloading image...');
