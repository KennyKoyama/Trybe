import { PILL_CHOICE } from "../actions";

const INITIAL_STATE = {
  id: '',
};

const selectedPill = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // implemente aqui
    case PILL_CHOICE:
      return { id: action.payload }

    default:
      return state;
  }
};

export default selectedPill;
