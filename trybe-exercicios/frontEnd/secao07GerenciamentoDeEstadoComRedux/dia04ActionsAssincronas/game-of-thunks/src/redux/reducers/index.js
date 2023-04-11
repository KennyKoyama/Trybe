import { UPDATE_INFO_STARTED, UPDATE_INFO_SUCCESSFUL, UPDATE_INFO_FAILED, HANDLE_CHANGE_INPUT } from '../actions';

const INITIAL_STATE = {
  info: {},
  inputValue: '',
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case UPDATE_INFO_STARTED:
    return { ...state };

  case UPDATE_INFO_SUCCESSFUL:
    return { info: payload, inputValue: '' };
    
  case UPDATE_INFO_FAILED:
    return { ...INITIAL_STATE };
    
  case HANDLE_CHANGE_INPUT:
    return { ...state, inputValue: payload };
    
  default:
    return state;
  }
};

export default reducer;
