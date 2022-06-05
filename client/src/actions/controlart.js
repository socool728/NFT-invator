import api from "../utils/api";
import store from "../store";
import {
  IMAGE_ADD,
  IMAGE_REMOVE,
  IMAGE_SAVE,
  IMAGE_SELECT,
  IMAGE_NEW,
} from "./types";

function shuffles(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export const addItem = (add) => {
  api.post("/art/", add, {}).then((res) => {
    store.dispatch({
      type: IMAGE_ADD,
      payload: res.data,
    });
  });
};

export const removeItem = (remove) => {
  api.post("/art/", remove, {}).then((res) =>
    store.dispatch({
      type: IMAGE_REMOVE,
      payload: res.data,
    })
  );
};

export const shuffleItem = (shuffle) => {
  api.post("/art/", { add: shuffles(shuffle) }, {}).then((res) =>
    store.dispatch({
      type: IMAGE_ADD,
      payload: res.data,
    })
  );
};

export const saveItem = (item) => {
  store.dispatch({
    type: IMAGE_SAVE,
    payload: item,
  });
};

export const selectSavedItem = (item) => {
  store.dispatch({
    type: IMAGE_SELECT,
    payload: item,
  });
};

export const newItem = () => {
  store.dispatch({
    type: IMAGE_NEW,
    payload: "0",
  });
};

export const addName = (item) => {
  store.dispatch({
    type: IMAGE_ADD,
    payload: item,
  });
};
