const proxy = require("http-proxy-middleware");


module.exports = function(app) {
	app.use(
	  proxy("/", {
		target: "https://pokeapi.glitch.me/v1/pokemon/",
		secure: false,
		changeOrigin: true
	  })
	);
