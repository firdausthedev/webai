import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../img/zip.svg";

function ModelUpload({ showModelFunc }) {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file1Loaded, isFile1Loaded] = useState(false);
  const [file2Loaded, isFile2Loaded] = useState(false);
  const [loading, isLoading] = useState(false);

  const hiddenFile1Input = React.useRef(null);
  const hiddenFile2Input = React.useRef(null);

  // const currentURL = "https://firdausthedev-webai.herokuapp.com";
  const currentURL = "http://127.0.0.1:5000";

  const fileChange = (file, e) => {
    if (file === "1") {
      if (e.target.files && e.target.files.length > 0) {
        setFile1(e.target.files[0]);
      }
    }

    if (file === "2") {
      if (e.target.files && e.target.files.length > 0) {
        setFile2(e.target.files[0]);
      }
    }
  };

  const onClearClick = (file) => {
    if (file === "1") setFile1(null);
    if (file === "2") setFile2(null);
  };

  const onUploadClick = (file) => {
    isLoading(true);
    let zipfile = "";
    if (file === "1") zipfile = file1;
    if (file === "2") zipfile = file2;
    const formData = new FormData();
    formData.append("file", zipfile);
    formData.append("filename", zipfile.name);

    fetch(currentURL + "/uploadfile", {
      method: "POST",
      body: formData,
    }).then((response) => {
      response.json().then((body) => {
        const res = body.filename;
        if (body.success) {
          if (file === "1") isFile1Loaded(true);
          if (file === "2") isFile2Loaded(true);
          isLoading(false);
        } else {
          //   console.log("dw");
        }
      });
    });
  };

  const onFileClick = (file, hidden) => {
    if (file == null) {
      hidden.current.click();
    }
  };

  return (
    <ModelUploadDiv>
      <div className='label-inputs'>
        <p>{file1Loaded == false ? "First" : "Second"} Label</p>
      </div>
      {file2 == null && file1Loaded == false && (
        <div
          className='upload-input'
          onClick={() => onFileClick(file1, hiddenFile1Input)}
        >
          <input
            id='file-upload'
            type='file'
            name='file'
            accept='image/*'
            style={{ display: "none" }}
            accept='.zip'
            ref={hiddenFile1Input}
            onChange={(e) => fileChange("1", e)}
            onClick={(event) => {
              event.target.value = null;
            }}
          />
          {file1 == null && (
            <div className='upload-info'>
              <p>UPLOAD ZIP FILE HERE</p>
              <p>Accepting .zip file containing 1000 images</p>
            </div>
          )}
          {file1 && !loading && file2 == null && !file1Loaded && (
            <div className='upload-file'>
              <Logo />
              <p>{file1.name}</p>
              <div className='upload-image-btns'>
                <a onClick={(e) => onClearClick("1")}>Clear</a>
                <a onClick={() => onUploadClick("1")}>Upload</a>
              </div>
            </div>
          )}
          {loading && <p>Loading...</p>}
        </div>
      )}
      {file1Loaded && !file2Loaded && (
        <div
          className='upload-input'
          onClick={() => onFileClick(file2, hiddenFile2Input)}
        >
          <input
            id='file-upload'
            type='file'
            name='file'
            accept='image/*'
            style={{ display: "none" }}
            accept='.zip'
            ref={hiddenFile2Input}
            onChange={(e) => fileChange("2", e)}
            onClick={(event) => {
              event.target.value = null;
            }}
          />
          {file2 == null && (
            <div className='upload-info'>
              <p>UPLOAD ZIP FILE HERE</p>
              <p>Accepting .zip file containing 1000 images</p>
            </div>
          )}
          {file2 && !loading && !file2Loaded && (
            <div className='upload-file'>
              <Logo />
              <p>{file2.name}</p>
              <div className='upload-image-btns'>
                <a onClick={(e) => onClearClick("2")}>Clear</a>
                <a onClick={() => onUploadClick("2")}>Upload</a>
              </div>
            </div>
          )}
          {loading && <p>Loading...</p>}
        </div>
      )}
      {file2Loaded && (
        <div className='upload-input'>
          <div className='upload-file'>
            <p>Training model..</p>
            <p>This might take a while..</p>
          </div>
        </div>
      )}
      }
    </ModelUploadDiv>
  );
}

const ModelUploadDiv = styled.div`
  max-width: 1100px;
  margin: auto;
  display: flex;
  margin-top: 4rem;

  a {
    text-decoration: none;
    color: white;
    background: black;
    padding: 0.5rem;
    border-radius: 10px;
    width: 100px;
    align-self: flex-end;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.8rem;
  }

  .label-inputs {
    display: flex;
    flex-direction: column;

    p {
      padding: 1rem;
      border-radius: 10px;
      background-color: black;
      color: white;
      width: 200px;
      font-weight: bolder;
      font-size: 1rem;
    }
  }

  .upload-input {
    background: #0f2027;
    background: -webkit-linear-gradient(to right, #2c5364, #203a43, #0f2027);
    background: linear-gradient(to right, #2c5364, #203a43, #0f2027);

    color: white;
    width: 100%;
    height: 300px;
    margin-left: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;

    p {
      text-align: center;
    }
    p:first-child {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    p:last-child {
      font-size: 0.8rem;
    }
  }

  .upload-image-btns {
    display: flex;
    margin-top: 15px;

    a:first-child {
      background: #ff5151;
      margin-right: 20px;
    }
    a:last-child {
      background: #77d970;
    }
  }

  .upload-file {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    svg {
      width: 100px;
      fill: white;
      margin-bottom: 15px;
    }
  }
`;

export default ModelUpload;
