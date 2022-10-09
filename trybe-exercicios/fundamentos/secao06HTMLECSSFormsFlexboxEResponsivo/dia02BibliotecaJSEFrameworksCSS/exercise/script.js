import JustValidate from 'just-validate';
import bootstrap from 'bootstrap';

// Interrompa o comportamento padrão do botão submit utilizando o método preventDefault().
const submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', (event) => event.preventDefault());

// Crie um botão que limpe as informações contidas nos campos.
const buttonsFieldset = document.querySelector('#buttons-fieldset');

// (Bônus) A TrybeTrip precisa muito de fotos para divulgar seus concursos. Tendo isso em mente, faça com que somente quem autorizar o uso de imagens possa enviar suas informações.

// (Bônus) Faça a validação dos campos com limite de caracteres. Caso não estejam dentro do esperado ao clicar no botão de submit, um alerta deve ser mostrado com a mensagem: ‘Dados Inválidos’. Caso contrário, a mensagem ‘Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.’ deverá aparecer na tela.

//Use Just Validate library
const validation = new JustValidate('#form', {
  errorFieldCssClass: 'is-invalid',
});

validation
  .addField('#name', [
    {
      rule: 'minLength',
      value: 5,
    },
    {
      rule: 'maxLength',
      value: 50,
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Email is required',
    },
    {
      rule: 'email',
      errorMessage: 'Email is invalid!',
    },
  ])
  .addField('#image-rights-checkbox', [
    {
      rule: 'required',
      errorMessage: 'Image rights is required',
    }
  ]);

// Bootstrap validation
(() => {
  'use strict'
const forms = document.querySelectorAll('.needs-validation')

// Loop over them and prevent submission
Array.from(forms).forEach(form => {
  form.addEventListener('submit', event => {
    if (!form.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
    }

    form.classList.add('was-validated')
  }, false)
})
})()
