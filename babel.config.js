module.exports = function(api) {
	api.cache(true);
	return {
		"plugins": [
			"@babel/plugin-proposal-class-properties",
			"@babel/plugin-transform-classes"
		],
		"presets": [
			"@babel/preset-env",
			"@babel/preset-react"
		],
		"highlightCode": true
	};
}