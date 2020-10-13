import React from "react"
import PropTypes from "prop-types"

const FloatingWrapper = ({ show, setShow }) => {
  const buttons = ["mission", "short", "long"].map(each => (
    <button
     key={each}
      className={show === each ? "changeCurrentColor" : "fltBtn"}
      onClick={() => setShow(each)}
    >
      {each}
    </button>
  ))
  return <div className="floatingBtn">{buttons}</div>
}

export default FloatingWrapper

FloatingWrapper.propTypes = {
    show: PropTypes.string.isRequired,
    setShow: PropTypes.func.isRequired
}
