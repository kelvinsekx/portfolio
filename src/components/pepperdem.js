import React from "react"
import PropTypes from "prop-types"

export default function PepperDem(props) {
  return <>{props.title}</>
}

PepperDem.propTypes = {
    title: PropTypes.string.isRequired
}
