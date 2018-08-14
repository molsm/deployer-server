const app = require('express')();
const server = require('http').Server(app);
require('./routes')(app);

app.listen(3333, () => console.log('💥 Boom... here we go..'));