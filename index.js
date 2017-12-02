const express = require('express');
const app = express();

/* 	the app object represents the underlying running express server
 	app.get creates a brand new route handler
 	.get watches for incoming requests with a get method
 	'/' the route portion of the handler, '/' means if anyone comes to our root route
 	req = request, a javascript object that represents the incoming request
 	res = response, an object that respresents the outgoing response
 	res.send = immediately send json data
*/
app.get('/', (req, res) => {
	res.send({ hi: 'there' });
});

// PORT : heroku will be able to inject environment variables (variables that can be configured at deployment)
// boolean handles the development environment
const PORT = process.env.PORT || 5000;
app.listen(PORT);
