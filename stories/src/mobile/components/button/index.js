import React, {useState} from 'react';
import PropTypes from 'prop-types'

export const Button = ({
                         callBack,
                         enabled,
                         children,
                       }) => {

  return (
    <button
      disabled={!enabled}
      className={`validation`}
      onClick={(e) => enabled ? callBack(e) : undefined}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  callBack: PropTypes.func,
  enabled: PropTypes.bool,
  children: PropTypes.node,
}

Button.defaultProps = {
  callBack: () => undefined,
  enabled: false,
  children: "Valider",
}
