import React from 'react'
import PropTypes from 'prop-types'

const Button = ({func, btnName, btnStyle}) => <button onClick={ func } style={ {backgroundColor: btnStyle} }>{ btnName }</button>;

Button.propTypes = {
  func:PropTypes.func,
  btnName: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  btnStyle: PropTypes.string
}

export default Button