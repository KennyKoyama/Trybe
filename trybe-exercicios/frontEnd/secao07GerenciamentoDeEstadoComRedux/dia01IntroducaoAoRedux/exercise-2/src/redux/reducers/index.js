import { TOGGLE_THEME, TOGGLE_STATUS } from "../actions";

const INITIAL_STATE = {
  status: 'offline',
  theme: 'dark',
};

const reducer = (state = INITIAL_STATE, { type }) => {
  switch (type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === 'dark' ? 'light' : 'dark',
      }

    case TOGGLE_STATUS:
      return {
        ...state,
        status: state.status === 'offline' ? 'online' : 'offline',
      }

    default:
      return state
  }
}

export default reducer;
