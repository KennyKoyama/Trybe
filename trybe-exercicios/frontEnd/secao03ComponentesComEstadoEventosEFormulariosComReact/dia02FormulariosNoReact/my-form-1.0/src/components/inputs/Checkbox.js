import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Checkbox extends Component {
  render() {
    const { updateState } = this.props;
    return (
      <fieldset id='checkboxField'>
        <legend>CheckBox</legend>
        <input
          type='checkbox'
          name='checkbox'
          id='checkbox1'
          value='checkbox1'
          onChange={({target:{checked}}) => updateState('checkbox1', checked)}
        />
        <label htmlFor='checkbox1'>Checkbox 1</label>
        <input
          type='checkbox'
          name='checkbox'
          id='checkbox2'
          value='checkbox2'
          onChange={({target:{checked}}) => updateState('checkbox2', checked)}
        />
        <label htmlFor='checkbox2'>Checkbox 2</label>
      </fieldset>
    );
  };
};

Checkbox.propTypes = {
  updateState: PropTypes.func,
};

Checkbox.defaultProps = {
  updateState: () => console.log('Function updateState missing'),
};

export default Checkbox;