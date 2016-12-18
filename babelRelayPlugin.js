// https://facebook.github.io/relay/docs/guides-babel-plugin.html

// Require `babel-relay-plugin` to return a function for creating plugin instances
const getBabelRelayPlugin = require('babel-relay-plugin');

// Load generated schema data
const schemaData = require('./js/data/schema.json').data;

// Invoke plugin instance with schema as argument
const plugin = getBabelRelayPlugin(schemaData);

// Export the plugin for use by Webpack
module.exports = plugin;