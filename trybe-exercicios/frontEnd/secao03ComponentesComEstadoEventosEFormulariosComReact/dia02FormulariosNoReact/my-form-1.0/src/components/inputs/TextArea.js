import PropTypes from 'prop-types';
import React, { Component } from 'react';

class TextArea extends Component {
  render() {
    const { textareaState, updateState } = this.props;
    return (
      <fieldset id='textareaField'>
        <legend>TextArea</legend>
        <textarea
          name='textarea'
          placeholder='Insira o texto.'
          id='textarea'
          onChange={({target:{value}}) => updateState('textarea', value)}
          value={textareaState}
        >
        </textarea>
      </fieldset>
    );
  };
};

TextArea.propTypes = {
  updateState: PropTypes.func,
};

TextArea.defaultProps = {
  updateState: () => console.log('Function updateState missing'),
};

export default TextArea;