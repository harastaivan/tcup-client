const dotenvPlugin = require('cypress-dotenv')

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
    config = dotenvPlugin(config)
    return config
}
