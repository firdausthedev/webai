import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../img/upload.svg";

function ImageUpload() {
  const [model, setModel] = useState(["man", "woman"]);
  const [file, setFile] = useState(null);
  const [loadPred, isLoadPred] = useState(false);
  const [showPred, setShowPred] = useState(false);
  const [pred, setPred] = useState(0.0);
  const [isModel, setIsModel] = useState(true);
  const [error, setError] = useState(false);
  const [cModel, setCModel] = useState("");

  const hiddenFileInput = React.useRef(null);
  const hiddenUploadInput = React.useRef(null);

  // const currentURL = "https://firdausthedev-webai.herokuapp.com";
  const currentURL = "http://127.0.0.1:5000";

  const onFileClick = (e) => {
    if (file == null) {
      hiddenFileInput.current.click();
    }
  };

  const modelFunc = (mod) => {
    if (!showPred) setModel(mod);
  };

  const fileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  // Display error for 3s
  const errorHandle = () => {
    setError(true);
    const timer = setTimeout(() => {
      setError(false);
    }, 3000);
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
    fetch(currentURL + "/uploadimage", {
      method: "POST",
      body: formData,
    }).then((response) => {
      response.json().then((body) => {
        const res = body.filename;
        console.log(body);
        if (body.success == true) {
          fetch(currentURL + "/predictimage/" + res + "/" + model[0] + ".pkl", {
            method: "GET",
          }).then((response) => {
            response.json().then((body) => {
              const res = body.prob.model;
              const res2 = body.prob.model2;
              console.log(body.prob);
              if (res > res2) {
                setPred(res);
                setIsModel(true);
              } else {
                setPred(res2);
                setIsModel(false);
              }
              isLoadPred(false);
              setShowPred(true);
              // setPred(res);
              console.log(res);
            });
          });
        } else {
          isLoadPred(false);
          setFile(null);
          errorHandle();
        }
      });
    });
  };

  // When user click close btn
  const onClosePred = () => {
    setPred(0.0);
    setShowPred(false);
    setFile(null);
  };

  // When user click custom model btn
  const onCModelClick = (e) => {
    if (file == null) {
      hiddenUploadInput.current.click();
    }
  };

  // changes in custom model input
  const uploadChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const cModel = e.target.files[0];

      const formData = new FormData();
      formData.append("file", cModel);
      formData.append("filename", cModel.name);

      fetch(currentURL + "/uploadcmodel", {
        method: "POST",
        body: formData,
      }).then((response) => {
        response.json().then((body) => {
          if (!body.success) {
            isLoadPred(false);
            setFile(null);
            errorHandle();
          }
        });
      });
    }
  };
  return (
    <Upload>
      {error && <p className='error'>Error. Something went wrong</p>}
      <div className='main-upload'>
        <div className='image-select'>
          <p>Select Model</p>
          <a
            onClick={() => modelFunc(["man", "woman"])}
            className={model[0] == "man" ? "active" : ""}
          >
            Man or Woman
          </a>
          <a
            onClick={() => modelFunc(["knife", "scissor"])}
            className={model[0] === "knife" ? "active" : ""}
          >
            Knife or Scissor
          </a>
          <a
            onClick={() => modelFunc(["cat", "dog"])}
            className={model[0] === "cat" ? "active" : ""}
          >
            Cat or Dog
          </a>
          <a
            onClick={() => {
              modelFunc(["custom", "custom2"]);
              onCModelClick();
            }}
          >
            Upload model <Logo />
            <input
              id='file-upload'
              type='file'
              name='file'
              accept='.pkl'
              style={{ display: "none" }}
              ref={hiddenUploadInput}
              onChange={uploadChange}
              onClick={(event) => {
                event.target.value = null;
              }}
            />
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
                  {model[0] != "model" ? (
                    <img src={URL.createObjectURL(file)} />
                  ) : (
                    <p>{file.name}</p>
                  )}
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
                    Prediction: {(pred * 100).toFixed(2)}%{" "}
                    {isModel ? model[0] : model[1]}
                  </p>
                  <img src={URL.createObjectURL(file)} />
                  <a onClick={onClosePred}>Close</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Upload>
  );
}

const Upload = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  margin: auto;

  .main-upload {
    display: flex;
    margin-top: 2rem;

    .image-select {
      width: 300px;
      height: 300px;
      display: flex;
      flex-direction: column;
      margin-top: 8px;
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

      a:last-child {
        background: red;
        margin-top: 90px;
        background: black;
        color: white;
        display: flex;
        align-items: center;
        justify-content: space-between;

        svg {
          width: 40px;
          height: 25px;
          fill: white;
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
    background: #0f2027;
    background: -webkit-linear-gradient(to right, #2c5364, #203a43, #0f2027);
    background: linear-gradient(to right, #2c5364, #203a43, #0f2027);

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
      height: 150px;
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
      height: 150px;
      border-radius: 10px;
    }
    a {
      align-self: center;
      margin-top: 15px;
    }
  }

  .error {
    display: block;
    border: 1px solid #ff5151;
    padding: 0.5rem 0.8rem;
    text-align: center;
    color: #ff5151;
    border-radius: 5px;
  }
`;

export default ImageUpload;
