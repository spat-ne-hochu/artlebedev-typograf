# artlebedev-typograf

[![Build Status](https://travis-ci.org/spat-ne-hochu/artlebedev-typograf.svg?branch=master)](https://travis-ci.org/spat-ne-hochu/artlebedev-typograf)
[![Coverage Status](https://coveralls.io/repos/spat-ne-hochu/artlebedev-typograf/badge.svg?branch=master&service=github&r=1024)](https://coveralls.io/github/spat-ne-hochu/artlebedev-typograf?branch=master)
[![npm version](https://badge.fury.io/js/node-artlebedev-typograf.svg)](https://badge.fury.io/js/node-artlebedev-typograf)
[![Dependency Status](https://www.versioneye.com/user/projects/566ccc804e049b003b00085c/badge.svg?style=flat)](https://www.versioneye.com/user/projects/566ccc804e049b003b00085c)
[![DL](https://img.shields.io/npm/dm/node-artlebedev-typograf.svg)](https://www.npmjs.com/package/node-artlebedev-typograf)
[![DT](https://img.shields.io/npm/dt/node-artlebedev-typograf.svg)](https://www.npmjs.com/package/node-artlebedev-typograf)

## current stable 1.1.0

## info
remote typograf via <http://typograf.artlebedev.ru/webservices/typograf.asmx>

## usage

##### code

```javascript
var typograf = require('artlebedev-typograf');

typograf.encode('my name is "victor"', function(err, result) {
    console.log(result);
}
```

##### result

```bash
my&nbsp;name is&nbsp;&laquo;victor&raquo;
```

# changelog
### 1.0
1.0.0: initial build
1.0.1: update readme.md
1.0.2: fix error and initial travis integration
1.0.3: travis full integration
1.0.4: try code coverage
1.0.5: full code coverage

### 1.1
using official XML transport 

1.1.0: initial XML transport
