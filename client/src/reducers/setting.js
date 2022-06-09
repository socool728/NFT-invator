import { TRAIT_SAVE, RULE_SAVE, RENDER_SAVE } from "../actions/types";

const initialState = {
  traits: null,
  rule: null,
  type: "PNG",
  width: 1600,
  height: 1600,
  quality: 100,
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

    case RENDER_SAVE:
      return {
        ...state,
        type: payload.type,
        width: payload.width,
        height: payload.height,
        quality: payload.quality,
      };

    default:
      return state;
  }
}

export default settingReducer;
