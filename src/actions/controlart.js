import api from "../utils/api";
import store from "../store";
import { IMAGE_ADD, IMAGE_REMOVE } from "./types";

export const addItem = (add) => {
  api.post("/art/", add, {}).then((res) =>
    store.dispatch({
      type: IMAGE_ADD,
      payload: res.data,
    })
  );
};

export const removeItem = (remove) => {
  console.log(remove);
  api.post("/art/", remove, {}).then((res) =>
    store.dispatch({
      type: IMAGE_REMOVE,
      payload: res.data,
    })
  );
};
