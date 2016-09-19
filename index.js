var mjml = require('mjml');
var nunjucks = require('nunjucks');

var mailplate = function(options){

  var renderer = nunjucks;
  if(options.renderer){
    renderer = options.renderer
  }

  this.render = function(templateName, data, callback){
    renderer.render(templateName, data, function(err, result){
      if(err) return callback(err);
      try{
        var markup = mjml.mjml2html(result).replace(/\r?\n|\r/g, '');
        callback(null, markup);
      } catch (e) {
        callback(e);
      }

    })
  };

  return 'mailplate';
};

module.exports = mailplate;