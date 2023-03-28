import { NEXT_COLOR, PREVIOUS_COLOR, RANDOM_COLOR } from "../actions";

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const reducer = (state = INITIAL_STATE, { type }) => {
  switch (type) {
    case NEXT_COLOR:
      return {
        ...state,
        index: state.index < (state.colors.length - 1)
          ? state.index + 1
          : 0,
      }

    case PREVIOUS_COLOR:
      return {
        ...state,
        index: state.index > 0
          ? state.index - 1
          : (state.colors.length - 1),
      }

    case RANDOM_COLOR:
      return {
        colors: [
          ...state.colors,
          `#${Math.random().toString(16).slice(2, 8).padEnd(6, '0')}`,
        ],
        index: state.colors.length,
      }

    default:
      return state
  }
}

export default reducer;
