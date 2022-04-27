import React from "react"
import PropTypes from "prop-types"
import settings from "../../../data/settings.json"

import Header from "../header"
import "./layout.css"

const Layout = ({ children }) => (
  <React.Fragment>
    <Header headerLinks={settings.headerlinks} />
    <div>{children}</div>
  </React.Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
