import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Radio extends Component {
  render() {
    const { radioState, updateState } = this.props;
    return (
      <fieldset id='radiosField'>
        <legend>Radios</legend>
        <input
          type='radio'
          id='radio1'
          name='radios'
          value='Radio1'
          onChange={() => updateState('radio', 'radio1')}
          checked={radioState === 'radio1'}
        />
        <label htmlFor='radio1'>Radio1</label>
        <input
          type='radio'
          id='radio2'
          name='radios'
          value='Radio2'
          onChange={() => updateState('radio', 'radio2')}
          checked={radioState === 'radio2'}
        />
        <label htmlFor='radio2'>Radio2</label>
        <input
          type='radio'
          id='radio3'
          name='radios'
          value='Radio3'
          onChange={() => updateState('radio', 'radio3')}
          checked={radioState === 'radio3'}
        />
        <label htmlFor='radio3'>Radio3</label>
      </fieldset>
    );
  };
};

Radio.propTypes = {
  updateState: PropTypes.func,
};

Radio.defaultProps = {
  updateState: () => console.log('Function updateState missing'),
};

export default Radio;