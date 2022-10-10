// Interrompa o comportamento padrão do botão submit utilizando o método preventDefault().
const submitButton = document.querySelector('#submit-btn');
// submitButton.addEventListener('click', (event) => event.preventDefault());
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const textInput = document.querySelector('#answer');
const dateInput = document.querySelector('#datepicker');
const destinyInput = document.querySelectorAll('input[name="preferred-destiny"]');

// (Bônus) A TrybeTrip precisa muito de fotos para divulgar seus concursos. Tendo isso em mente, faça com que somente quem autorizar o uso de imagens possa enviar suas informações.
const imageRights = document.querySelector('#image-rights-checkbox');
submitButton.addEventListener('click', (event) => {
  if (!isValid()) {
    event.preventDefault();
    return;
    // return alert('Dados Inválidos');
  };
  if (!imageRights.checked) {
    alert('Você precisa concordar com o direito de uso de imagem para conseguir enviar.');
    event.preventDefault();
  } else {
    const fullName = document.querySelector('#name-input').value;
    alert(`Formulário enviado com sucesso! Boa sorte ${fullName}! Obrigado por participar do concurso TrybeTrip.`);
  }
});

// (Bônus) Faça a validação dos campos com limite de caracteres. Caso não estejam dentro do esperado ao clicar no botão de submit, um alerta deve ser mostrado com a mensagem: ‘Dados Inválidos’. Caso contrário, a mensagem ‘Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.’ deverá aparecer na tela.
const checkName = () => nameInput.value.length > 10;
const checkEmail = () => emailInput.value.length > 10;
const checkText = () => textInput.value.length > 50;
const checkDate = () => dateInput.value.length > 0;
const checkImgRights = () => imageRights.checked;
const checkDestiny = document.querySelectorAll('input[name="preferred-destiny"]');
const classValidate = (bool) => bool ? 'is-valid' : 'is-invalid';
const typeText = 'form__input form-control';
const typeCheckbox = 'form__input form-check-input';
const typeDate = 'left-margin date-input';
const typeRadio = 'form-check-input';
function toggleClass(selector, check) {
  const findType = selector.type;
  const findID = selector.id;
  if (findType === 'text' || findType === 'textarea') selector.className = typeText;
  if (findType === 'checkbox') selector.className = typeCheckbox;
  // if (findType === 'radio') selector.className = typeRadio;
  if (findID === 'datepicker') selector.className = typeDate;
  selector.classList.add(classValidate(check));
}

function isValid() {
  const checkDestiny = document.querySelectorAll('input[name="preferred-destiny"]');
  let checkRadio = false;
  for (const option of checkDestiny) {
    if (option.checked) radio = true;
  };
  toggleClass(nameInput, checkName())
  toggleClass(emailInput, checkEmail())
  toggleClass(textInput, checkText())
  toggleClass(dateInput, checkDate())
  toggleClass(imageRights, checkImgRights())

  const result = checkName() && checkEmail() && checkText() && checkDate() && checkRadio;
  return result
};

//Use Just Validate library
// const validation = new JustValidate('#form', {
//   errorFieldCssClass: 'is-invalid',
// });

// validation
//   .addField('#name', [
//     {
//       rule: 'minLength',
//       value: 5,
//     },
//     {
//       rule: 'maxLength',
//       value: 50,
//     },
//   ])
//   .addField('#email', [
//     {
//       rule: 'required',
//       errorMessage: 'Email is required',
//     },
//     {
//       rule: 'email',
//       errorMessage: 'Email is invalid!',
//     },
//   ])
//   .addField('#image-rights-checkbox', [
//     {
//       rule: 'required',
//       errorMessage: 'Image rights is required',
//     }
//   ]);
