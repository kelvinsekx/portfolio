import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// <link rel="stylesheet" href="https://get.mavo.io/mavo.css">
// <script src="https://get.mavo.io/mavo.js"></script>
import PepperDem from "../components/pepperdem";

const NotFoundPage = () => (
  <Layout>
    <PepperDem title={12} />
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
