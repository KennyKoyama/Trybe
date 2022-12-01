import React, { Component } from 'react';
import Checkbox from './inputs/Checkbox';
import Radio from './inputs/Radio';
import Select from './inputs/Select';
import TextArea from './inputs/TextArea';

class Forms extends Component {
  state = {
    select: 'option1',
    radio: '',
    textarea: '',
    checkbox1: '',
    checkbox2: '',
    isDisable: true,
    submitted: [],
  };

  validate = () => {
    const { radio, textarea, checkbox1, checkbox2 } = this.state;
    const isValid = radio && textarea.length > 5 && checkbox1 && checkbox2;
    this.setState({ isDisable: !isValid });
  };

  updateState = (selectedState, value) => this.setState({ [selectedState]: value }, this.validate);

  handleSubmit = (event) => {
    event.preventDefault();
    const { select, radio, textarea, checkbox1, checkbox2 } = this.state;
    const newSub = { select, radio, textarea, checkbox1, checkbox2 };
    this.setState(({ submitted }) => ({ submitted: [...submitted, newSub] }));
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
        </fieldset>
        <button type='submit' disabled={isDisable}>Enviar</button>
      </form>
    );
  };
};

export default Forms;