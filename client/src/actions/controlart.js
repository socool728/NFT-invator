import api from "../utils/api";
import store from "../store";
import {
  IMAGE_ADD,
  IMAGE_REMOVE,
  IMAGE_SAVE,
  IMAGE_SELECT,
  IMAGE_NEW,
  ITEM_SAVE,
  SAVE_CHANGE,
} from "./types";

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
  api.post("/art/", shuffle, {}).then((res) =>
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

export const saveItems = (items) => {
  store.dispatch({
    type: ITEM_SAVE,
    payload: items,
  });
};

export const saveChange = (items) => {
  console.log(items);
  store.dispatch({
    type: SAVE_CHANGE,
    payload: items,
  });
};
