import React from "react";
import styled from "styled-components";

const ImageUpload = () => {
  return (
    <Upload>
      <div className='image-select'>
        <p>Select Model</p>
        <a
          className='active'
          a
          href='#'
          rel='noopener noreferrer'
          target='_blank'
        >
          Axe model
        </a>
        <a a href='#' rel='noopener noreferrer' target='_blank'>
          Knife model
        </a>
        <a a href='#' rel='noopener noreferrer' target='_blank'>
          Wrench model
        </a>
      </div>
      <div className='image-upload'>
        <a a href='#' rel='noopener noreferrer' target='_blank'>
          My Uploads
        </a>
        <div className='upload-box'>
          <div>
            <p>DROP IMAGE HERE</p>
            <p>Accepting png, jpg and jpeg files.</p>
          </div>
        </div>
      </div>
    </Upload>
  );
};

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
`;

export default ImageUpload;
