var mjml = require('mjml');
var nunjucks = require('nunjucks');
var path = require('path');
var mailplate = function(options){

  var renderer = nunjucks;
  if(options.renderer){
    renderer = options.renderer
  }

  this.render = function(templateName, data, callback){

    if(options.templateDir){
      templateName = path.resolve(options.templateDir, templateName);
    }

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