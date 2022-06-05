import axios from "axios";
import { IMAGE_LOAD } from "./types";
import store from "../store";

// Call a function (passed as a prop from the parent component)
// to handle the user-selected file
export const handleChange = (e) => {
  const formData = new FormData();
  for (const key of Object.keys(e.target.files)) {
    const folderPath = e.target.files[key].webkitRelativePath;
    formData.append("imgCollection", e.target.files[key]);
    formData.append("folderPath", folderPath);
  }
  axios.post("http://10.10.11.67:4000/api/upload", formData, {}).then((res) => {
    store.dispatch({
      type: IMAGE_LOAD,
      payload: res.data.imgCollection,
    });
  });
  // console.log("---1---");
  // dispatch({
  //   type: IMAGE_LOAD,
  //   payload: "ASFAF",
  // });
};
