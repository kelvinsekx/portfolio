const React = require("react")

require("./src/styles/global.css")
require("./src/styles/index.css")
require("prismjs/themes/prism-solarizedlight.css")

const Layout = require("./src/components/layouts/layout").default

// Wraps every page in a components
exports.wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>
}
