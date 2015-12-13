# artlebedev-typograf

[![Build Status](https://travis-ci.org/spat-ne-hochu/artlebedev-typograf.svg?branch=master)](https://travis-ci.org/spat-ne-hochu/artlebedev-typograf)
[![Coverage Status](https://coveralls.io/repos/spat-ne-hochu/artlebedev-typograf/badge.svg?branch=master&service=github)](https://coveralls.io/github/spat-ne-hochu/artlebedev-typograf?branch=master)

## info
    
current stable 1.0.3
remote typograf via <http://www.artlebedev.ru/tools/typograf>

## usage

##### code

```javascript
var typograf = require('artlebedev-typograf');

typograf.encode('my name is "victor"', function(err, result) {
    console.log(result)
}
```

##### result

```bash
my&nbsp;name is&nbsp;&laquo;victor&raquo;
```

### changelog
##### 1.0.0
initial build
##### 1.0.1
update readme.md
##### 1.0.2
fix error and initial travis integration
