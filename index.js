var mjml = require('mjml');
var path = require('path');
var fs = require('fs');
var mailplate = function(options){

  var renderer;
  if(options.renderer){
    renderer = options.renderer
  }

  this.render = function(templateName, data, callback){

    function renderMJML(err, markup){
      if(err) return callback(err);
      try{
        markup = mjml.mjml2html(markup).replace(/\r?\n|\r/g, '');
        callback(null, markup);
      } catch (e) {
        callback(e);
      }
    }

    if(options.templateDir){
      templateName = path.resolve(options.templateDir, templateName);
      fs.readFile(templateName, 'utf8', function (err, templateString){
        if(err) callback(err);
        renderer.renderString(templateString, data, renderMJML);
      })
    } else {
      renderer.render(templateName, data, renderMJML)
    }

  };

  return 'mailplate';
};

module.exports = mailplate;