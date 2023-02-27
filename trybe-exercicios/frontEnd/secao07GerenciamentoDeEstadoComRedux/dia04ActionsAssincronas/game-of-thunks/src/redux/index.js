// Ops! A aplicação está quebrada!!
// Implemente a Store nesse arquivo e o Provider no arquivo ./src/index.js
// para a aplicação voltar a funcionar!
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import reducer from './reducers';
import thunk from 'redux-thunk';

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

export default store;