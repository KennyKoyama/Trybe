import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Select extends Component {
  render() {
    const { updateState } = this.props;
    return (
      <fieldset id='selectField'>
        <legend>Select</legend>
        <label htmlFor='select'>Escolha uma opção:</label>
        <select id='select' name='select' onChange={({target:{value}}) => updateState('select', value)}>
          <option value='option1'>Opção 1</option>
          <option value='option2'>Opção 2</option>
        </select>
      </fieldset>
    );
  };
};

Select.propTypes = {
  updateState: PropTypes.func,
};

Select.defaultProps = {
  updateState: () => console.log('Function updateState missing'),
};

export default Select;