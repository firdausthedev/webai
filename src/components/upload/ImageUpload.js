import React, { useState } from "react";
import styled from "styled-components";

function ImageUpload() {
  const [model, setModel] = useState("knife");
  const [file, setFile] = useState(null);
  const [loadPred, isLoadPred] = useState(false);
  const [showPred, setShowPred] = useState(false);
  const [pred, setPred] = useState(0.0);

  const hiddenFileInput = React.useRef(null);

  const onFileClick = (e) => {
    if (file == null) {
      hiddenFileInput.current.click();
    }
  };

  const modelFunc = (name) => {
    setModel(name);
  };

  const fileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  // When user click clear btn
  const onClearClick = (e) => {
    setFile(null);
  };

  // When user click upload btn
  const onUploadClick = () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("filename", file.name);
    isLoadPred(true);
    fetch("https://firdausthedev-webai.herokuapp.com/uploadimage", {
      method: "POST",
      body: formData,
    }).then((response) => {
      response.json().then((body) => {
        const res = body.filename;
        fetch(
          "https://firdausthedev-webai.herokuapp.com/predictimage/" +
            res +
            "/" +
            model +
            ".pkl",
          {
            method: "GET",
          }
        ).then((response) => {
          response.json().then((body) => {
            const res = body.prob.model;
            isLoadPred(false);
            setShowPred(true);
            setPred(res);
            console.log(res);
          });
        });
      });
    });
  };

  // When user click close btn
  const onClosePred = () => {
    setPred(0.0);
    setShowPred(false);
    setFile(null);
  };

  return (
    <Upload>
      <div className='image-select'>
        <p>Select Model</p>
        <a
          onClick={() => modelFunc("knife")}
          className={model === "knife" ? "active" : ""}
        >
          Knife model
        </a>
        <a
          onClick={() => modelFunc("scissor")}
          className={model === "scissor" ? "active" : ""}
        >
          Scissor model
        </a>
        <a
          onClick={() => modelFunc("model")}
          className={model === "model" ? "active" : ""}
        >
          Upload model +
        </a>
      </div>
      <div className='image-upload'>
        <a>My Uploads</a>
        <div className='upload-box' onClick={onFileClick}>
          <input
            id='file-upload'
            type='file'
            name='file'
            accept='image/*'
            style={{ display: "none" }}
            ref={hiddenFileInput}
            onChange={fileChange}
            onClick={(event) => {
              event.target.value = null;
            }}
          />
          <div>
            {file == null ? (
              <div className='upload-info'>
                <p>UPLOAD IMAGE HERE</p>
                <p>Accepting image files such as png, jpg and jpeg.</p>
              </div>
            ) : loadPred == false && showPred == false ? (
              <div className='upload-image'>
                <img src={URL.createObjectURL(file)} />
                <p></p>
                <div className='upload-image-btns'>
                  <a onClick={onClearClick}>Clear</a>
                  <a onClick={onUploadClick}>Upload</a>
                </div>
              </div>
            ) : loadPred ? (
              <div className='upload-loading'>
                {/* <img src={URL.createObjectURL(file)} /> */}
                <p>Loading...</p>
              </div>
            ) : (
              <div className='upload-predict'>
                <p>
                  Prediction: {(pred * 100).toFixed(2)}% {model}
                </p>
                <img src={URL.createObjectURL(file)} />
                <a onClick={onClosePred}>Close</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </Upload>
  );
}

const Upload = styled.div`
  max-width: 1100px;
  margin: auto;
  margin-top: 4rem;
  display: flex;

  .image-select {
    width: 300px;
    display: flex;
    flex-direction: column;
    color: black;

    p {
      font-weight: bolder;
      margin-bottom: 1rem;
    }
    a {
      text-decoration: none;
      color: inherit;
      padding: 1rem 0.5rem;
      border-radius: 10px;

      &:hover {
        background: black;
        color: white;
        transition: 1s;
      }
    }
    a.active {
      background-color: rgba(230, 230, 230, 0.75);

      &:hover {
        background: black;
        color: white;
        transition: 1s;
      }
    }
  }

  .image-upload {
    display: flex;
    flex-direction: column;
    width: 100%;

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
  }
  .upload-box {
    background: #0f2027; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #2c5364,
      #203a43,
      #0f2027
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #2c5364,
      #203a43,
      #0f2027
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    color: white;
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
  .upload-image {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 150px;
      border-radius: 10px;
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
  }
  .upload-predict {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    p {
      font-size: 1rem;
    }
    img {
      width: 150px;
      border-radius: 10px;
    }
    a {
      align-self: center;
      margin-top: 15px;
    }
  }
`;

export default ImageUpload;
