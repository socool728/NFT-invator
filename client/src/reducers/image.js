import {
  IMAGE_LOAD,
  IMAGE_ADD,
  IMAGE_REMOVE,
  IMAGE_SAVE,
  IMAGE_SELECT,
  IMAGE_NEW,
} from "../actions/types";

const initialState = {
  image: null,
  now: "0",
  new: null,
  save: [],
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
        new: payload,
      };

    case IMAGE_REMOVE:
      return {
        ...state,
        new: payload,
      };

    case IMAGE_SAVE:
      return {
        ...state,
        now: payload.workspace,
        new: payload.new,
        save: payload.save,
      };

    case IMAGE_SELECT:
      return {
        ...state,
        now: payload.workspace,
        new: payload,
      };

    case IMAGE_NEW:
      return {
        ...state,
        now: payload,
        new: null,
      };

    default:
      return state;
  }
}

export default imageReducer;
