import React from "react";
import { Container, Button } from "react-bootstrap";
import { handleChange } from "../../../actions/upload";

const FileUpload = () => {
  // Create a reference to the hidden file input element
  const hiddenFileInput = React.useRef(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const onSubmit = (e) => {
    e.preventDefault();
    hiddenFileInput.current.click();
  };
  return (
    <Container className="mt-5">
      <span className="bg-primary folder-padding rounded-circle">
        <i className="far fa-folder-open text-white text-center fs-4"></i>
      </span>
      <h5 className="mt-4">Let's get started.</h5>
      <p className="text-muted p-3">
        Select a folder to import, or just take it for a spin with a demo
        project from <span className="text-primary">Diamond Hands Hotel.</span>
      </p>
      <Button className="text-primary fw-bolder bg-blues border-0 width-100 p-2">
        Try with a demo project →
      </Button>
      <form className="mt-3" onSubmit={onSubmit}>
        <Button
          className="bg-white width-100 rounded-3 p-5 border-dash"
          type="submit"
        >
          <span className="upload-padding rounded-circle bg-blues">
            <i className="fas fa-upload text-primary"></i>
          </span>
          <p className="text-secondary fw-bold mt-3 mb-1">
            Click to select a folder
          </p>
          <small className="text-muted">
            Selected folder should contain a folder for each trait with a file
            for each trait variation
          </small>
          <input
            type="file"
            id="imgCollection"
            ref={hiddenFileInput}
            onChange={handleChange}
            style={{ display: "none" }}
            webkitdirectory="true"
            nwdirectory="true"
            directory="true"
          />
        </Button>
      </form>
    </Container>
  );
};

export default FileUpload;
