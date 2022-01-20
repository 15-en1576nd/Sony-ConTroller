const express = require('express');
const app = express();
const path = require("path");
const port = 3000;
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const swaggerOptions = {
	swaggerDefinition: {
		info: {
			title: 'Sony ConTroller - API',
			description: 'API for sony TV\'s'
		},
		servers: ['http://localhost:3000']
	},
	apis: [__dirname + '/Routes/*.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use(require('./Routes/hello'));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname + "/views"));
app.use(express.static(__dirname + '/public'));

// Launch app on port
app.listen(port, () => console.log('\x1b[31m%s\x1b[0m', '[SERVER]', '\x1b[32m[WEB]\x1b[0m', `Connected @ localhost:${port}`));