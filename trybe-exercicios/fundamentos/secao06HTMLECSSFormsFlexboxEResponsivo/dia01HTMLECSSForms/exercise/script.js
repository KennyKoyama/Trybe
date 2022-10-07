// Interrompa o comportamento padrão do botão submit utilizando o método preventDefault().
const submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', (event) => event.preventDefault());

// Crie um botão que limpe as informações contidas nos campos.
const buttonsFieldset = document.querySelector('#buttons-fieldset');
const resetButton = document.createElement('input');
resetButton.type = 'reset';
resetButton.value = 'Apagar';
buttonsFieldset.appendChild(resetButton);

// (Bônus) A TrybeTrip precisa muito de fotos para divulgar seus concursos. Tendo isso em mente, faça com que somente quem autorizar o uso de imagens possa enviar suas informações.

// (Bônus) Faça a validação dos campos com limite de caracteres. Caso não estejam dentro do esperado ao clicar no botão de submit, um alerta deve ser mostrado com a mensagem: ‘Dados Inválidos’. Caso contrário, a mensagem ‘Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.’ deverá aparecer na tela.