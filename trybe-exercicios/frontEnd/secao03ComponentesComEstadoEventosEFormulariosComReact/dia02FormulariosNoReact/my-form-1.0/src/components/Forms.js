import React, { Component } from 'react';
import Checkbox from './inputs/Checkbox';
import Files from './inputs/Files';
import Radio from './inputs/Radio';
import Select from './inputs/Select';
import TextArea from './inputs/TextArea';

const INITIAL_STATE = {
  select: 'option1',
  radio: 'radio1',
  textarea: '',
  checkbox1: false,
  checkbox2: false,
  isDisable: true,
}

class Forms extends Component {
  state = {
    ...INITIAL_STATE,
    submitted: [],
  };

  validate = () => {
    const { radio, textarea, checkbox1, checkbox2 } = this.state;
    const isValid = textarea.length > 5 && checkbox1;
    this.setState({ isDisable: !isValid });
  };

  updateState = (selectedState, value) => this.setState({ [selectedState]: value }, this.validate);

  handleSubmit = (event) => {
    event.preventDefault();
    const { select, radio, textarea, checkbox1, checkbox2 } = this.state;
    const newSub = { select, radio, textarea, checkbox1, checkbox2 };
    this.setState(({ submitted }) => ({ ...INITIAL_STATE, submitted: [...submitted, newSub] }));
  };

  render() {
    const { select, radio, textarea, checkbox1, checkbox2, isDisable } = this.state;
    console.log(this.state)
    return (
      <form id='forms' onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>Formulário</legend>
          <Select selectState={select} updateState={this.updateState} />
          <Radio radioState={radio} updateState={this.updateState} />
          <TextArea textareaState={textarea} updateState={this.updateState} />
          <Checkbox checkboxState={{checkbox1, checkbox2}} updateState={this.updateState} />
          <Files />
        </fieldset>
        <button type='submit' disabled={isDisable}>Enviar</button>
      </form>
    );
  };
};

export default Forms;