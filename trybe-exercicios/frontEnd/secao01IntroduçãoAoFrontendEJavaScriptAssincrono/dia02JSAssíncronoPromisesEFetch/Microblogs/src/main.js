import './styles.css';

import {
  fillUsersSelect,
  fillPosts,
  fillFeaturedPostComments,
  clearPageData,
  fillErrorMessage,
} from './utils/updateUI';

const usersSelect = document.querySelector('#users-select');
const USERS_API = 'https://dummyjson.com/users';
// faça a lógica para pegar as informações das pessoas usuárias e preencher o select aqui.
// 1 - Faça um fetch para a API https://dummyjson.com/users para recuperar as informações
// das pessoas usuárias. Depois de receber os dados, passe o array retornado pela API com
// as informações das pessoas usuárias para a função fillUsersSelect para que o select da
// página seja atualizado.
fetch(USERS_API)
  .then(response => response.json())
  .then(data => fillUsersSelect(data.users))
  .catch(error => console.log(error));

usersSelect.addEventListener('change', (event) => {
  clearPageData();
  // faça a lógica para pegar as informações dos posts da pessoa selecionada e dos comentários do post destacado aqui.
  // 2 - Na estrutura inicial do projeto já existe o eventListener para o evento change do
  // select que dispara a função a clearPage. Depois da chamada dessa função, faça um fetch
  // para a API https://dummyjson.com/posts/user/{userID}. Lembre-se que você deve pegar o
  // id da pessoa selecionada através do atributo value do select.
  const userID = event.target.value;
  fetch(`https://dummyjson.com/posts/user/${userID}`)
    .then(response => response.json())
  // 3 - A requisição feita no item anterior irá retornar um array com os posts da pessoa
  // selecionada. Após receber as informações da API, utilize a função fillPosts, passando
  // a lista de posts recebida, para exibir os posts na tela. ℹ️ O primeiro item do array
  // será o post destacado. Os demais posts entram na lista de posts relacionados.
    .then(data => {
      fillPosts(data.posts)
  // 4 - Ainda usando o a lista de posts retornada pela requisição do item 2, pegue o id
  // do primeiro post da lista (esse será o post destacado) e faça uma requisição para URL
  // https://dummyjson.com/posts/{featuredPost.id}/comments para pegar os comentários do
  // post destacado. 💡Dica: lembre-se de usar o return e retornar essa chamada de fetch.
  // Dessa forma será possível encadear mais um .then em sequência.
      const featuredPost = data.posts[data.posts.length - 1];
      return fetch(`https://dummyjson.com/posts/${featuredPost.id}/comments`)
    })
    .then(response => response.json())
  // 5 - Depois de receber da API os comentários do primeiro post, use a função
  // fillFeaturedPostComments para exibi-los. Você deve passar para essa função o array
  // de comentários recebido no retorno da API.
    .then(data => fillFeaturedPostComments(data.comments))
  // 6 - Adicione um .catch ao final do encadeamento de todos os .then. Caso aconteça algum erro, esse .catch deverá chamar a função fillErrorMessage e passar a mensagem de erro.
    .catch(error => fillErrorMessage(error));
});
