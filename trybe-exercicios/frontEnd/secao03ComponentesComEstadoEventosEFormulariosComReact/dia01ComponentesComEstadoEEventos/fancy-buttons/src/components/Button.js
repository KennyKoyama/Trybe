import React from 'react'
import PropTypes from 'prop-types'

const Button = ({func, btnName}) => <button onClick={ func }>{ btnName }</button>;

Button.propTypes = {
  func:PropTypes.func,
  btnName: PropTypes.string
}

export default Button