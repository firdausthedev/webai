import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../img/close.svg";

function UploadHistory({ showHistoryFunc, showHistory, predList }) {
  return (
    <History>
      <Logo className='logo' onClick={() => showHistoryFunc(showHistory)} />
      <div className='upload-container'>
        <p className='title'>Your Upload History</p>
        {!predList.length ? (
          <p className='message'>You have not uploaded anything yet</p>
        ) : (
          <div>
            {predList.map((item, index) => (
              <div key={index} className='list'>
                <span>
                  {index + 1}. {item.file}
                </span>
                <span>
                  <span className='model'> {item.model}</span>
                  <span>{(item.pred * 100).toFixed(2)}%</span>
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </History>
  );
}

const History = styled.div`
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(18px);

  display: flex;
  align-items: center;
  justify-content: center;

  .logo {
    top: 0;
    right: 0;
    position: absolute;
    margin-right: 20px;
    margin-top: 20px;
    font-size: 14px;
    height: 30px;
    width: 30px;
    cursor: pointer;
  }

  .upload-container {
    border-radius: 10px;
    background: white;
    width: 700px;
    overflow: auto;
    padding: 42px;
    margin-bottom: 200px;
    max-height: 20rem;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .upload-container::-webkit-scrollbar {
    display: none;
  }

  .title {
    font-size: 1.8rem;
    margin-bottom: 20px;
  }

  .list {
    display: flex;
    width: 650px;
    justify-content: space-between;
    font-size: 1.2rem;
    border-bottom: 3px solid black;
    padding-bottom: 5px;
    padding-top: 5px;
  }

  .model {
    margin-right: 3rem;
  }
`;

export default UploadHistory;
