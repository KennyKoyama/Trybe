import JustValidate from 'just-validate';

// Interrompa o comportamento padrão do botão submit utilizando o método preventDefault().
const submitButton = document.querySelector('#submit-button');
// submitButton.addEventListener('click', (event) => event.preventDefault());

// Crie um botão que limpe as informações contidas nos campos.
const buttonsFieldset = document.querySelector('#buttons-fieldset');
const resetButton = document.createElement('input');
resetButton.type = 'reset';
resetButton.value = 'Apagar';
resetButton.classList.add('btn');
resetButton.classList.add('btn-danger');
buttonsFieldset.appendChild(resetButton);

// (Bônus) A TrybeTrip precisa muito de fotos para divulgar seus concursos. Tendo isso em mente, faça com que somente quem autorizar o uso de imagens possa enviar suas informações.
// const imageRights = document.querySelector('#image-rights-checkbox');
// submitButton.addEventListener('click', (event) => {
//   if (!isValid()) {
//     event.preventDefault();
//     return alert('Dados Inválidos');
//   };
//   if (!imageRights.checked) {
//     alert('Você precisa concordar com o direito de uso de imagem para conseguir enviar.');
//     event.preventDefault();
//   } else {
//     const fullName = document.querySelector('#name-input').value;
//     alert(`Formulário enviado com sucesso! Boa sorte ${fullName}! Obrigado por participar do concurso TrybeTrip.`);
//   }
// });

// (Bônus) Faça a validação dos campos com limite de caracteres. Caso não estejam dentro do esperado ao clicar no botão de submit, um alerta deve ser mostrado com a mensagem: ‘Dados Inválidos’. Caso contrário, a mensagem ‘Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.’ deverá aparecer na tela.
// function isValid() {
//   const name = document.querySelector('#name-input').value.length > 10;
//   const email = document.querySelector('#email-input').value.length > 10;
//   const text = document.querySelector('#answer').value.length > 50;
//   const date = document.querySelector('.date-input').value.length > 0;
//   const destiny = document.querySelectorAll('input[name="preferred-destiny"]');
//   let radio = false;
//   for (const option of destiny) {
//     if (option.checked) radio = true;
//   };
//   const result = name && email && text && date && radio;
//   return result
// };

//Use Just Validate library
const validate = new JustValidate('#form');

validate
  .addField('#name-input', [
    {
      rule: 'minLength',
      value: 5,
    },
    {
      rule: 'maxLength',
      value: 50,
    },
  ])
  .addField('#email-input', [
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
