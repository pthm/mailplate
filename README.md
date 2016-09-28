<p align="center">
  <img src="http://cdn.midrive.com/img/mailplate.png"/><br/>
  MJML + Your favourite templating engine
</p>

###Experimental
This project is still in early development. Proceed with caution, breaking changes will be coming

###Installation

```
npm install mailplate -s
```

###Usage

```javascript
var Mailplate = require('mailplate');
var nunjucks = require('nunjucks');

var mailplate = new Mailplate({
  renderer: nunjucks
});

mailplate.render('./hello.nunj', {
  name: 'World',
}, function(err, result){
  console.log(err, result);
});
```

*hello.nunj*
```html
<mjml>
  <mj-body>
    <mj-container>
      <mj-section>
        <mj-column>
          <mj-text align="center">
            Hello {{ name }}!
          </mj-text>
        </mj-column>
      </mj-section>
    </mj-container>
  </mj-body>
</mjml>
```