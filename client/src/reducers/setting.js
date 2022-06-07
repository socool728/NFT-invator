import { TRAIT_SAVE, RULE_SAVE } from "../actions/types";

const initialState = {
  traits: null,
  rule: null,
};

function settingReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case TRAIT_SAVE:
      return {
        ...state,
        traits: payload,
      };
    case RULE_SAVE:
      return {
        ...state,
        rule: payload,
      };

    default:
      return state;
  }
}

export default settingReducer;
