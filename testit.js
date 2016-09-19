var Mailplate = require('./index.js');
var nunjucks = require('nunjucks');

var mailplate = new Mailplate({
  renderer: nunjucks
});

mailplate.render('./templates/hello.nunj', {
  name: 'Patt-tom',
  buttons: ['Click me', 'Dont click']
}, function(err, result){
  console.log(err, result);
});