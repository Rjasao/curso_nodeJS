const path = require('path')

console.log('basename:',path.basename('/var/www/html/curso_nodeJS/path/path.js'))
console.log('normalize:',path.normalize('//var//www//html//dir/..'))
console.log('join path:',path.join('/var','/teste','/teste3/teste4','dir2','.'))
console.log('resolve:',path.resolve('path.js')) //arquivo absoluto
console.log('extension:', path.extname('path.js'))
