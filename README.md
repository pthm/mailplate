<p align="center">
  <img src="https://i.imgur.com/oYDr4jW.png"/><br/>
  MJML + Your favourite templating engine
</p>

### Experimental
This project is still in early development. Proceed with caution, breaking changes will be coming

Only tested with [nunjucks](https://mozilla.github.io/nunjucks)

### Installation

```
npm install mailplate -s
```

### Usage

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

**hello.nunj**
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

### Caveats

- You cannot use `<mj-include path="template.mjml">` instead use your template engines include function in nunjucks this is `{% include "template.html" %}`
