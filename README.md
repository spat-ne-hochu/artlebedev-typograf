# artlebedev-typograf

## info
    
version 1.0
remote typograf via [typograf web service]: <http://www.artlebedev.ru/tools/typograf>

## usage
```javascript
var typograf = require('artlebedev-typograf');

typograf.encode('my name is "victor"', function(err, result) {
    console.log(result)
}

result:
```bash
my&nbsp;name is&nbsp;&laquo;victor&raquo;
```