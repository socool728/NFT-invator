import { IMAGE_LOAD, IMAGE_ADD, IMAGE_REMOVE } from "../actions/types";

const initialState = {
  image: null,
  add: [],
  new: null,
};

function imageReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case IMAGE_LOAD:
      return {
        ...state,
        image: payload,
      };

    case IMAGE_ADD:
      return {
        ...state,
        add: payload.add,
        new: payload.new,
      };

    case IMAGE_REMOVE:
      return {
        ...state,
        add: payload.add,
        new: payload.new,
      };

    default:
      return state;
  }
}

export default imageReducer;
