import styled from "styled-components";

export const CatalogComponent = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  .fundo {
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    width: 100dvw;
    height: 100dvh;
    z-index: 2;
  }
  h1 {
    font-size: 40px;
    text-align: center;
    margin-bottom: 10px;
    font-weight: 600;
  }
  p {
    font-size: 26px;
    color: rgba(0, 0, 0, 0.8);
  }
  .modal {
    top: 14px;
    left: 4.5%;
    position: absolute;
    display: block;
    z-index: 3;
    width: 90%;
    height: 97%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;

    img {
      overflow: scroll;
      position: absolute;
      top: 0;
      transition: 0.5s all ease-in-out;
      z-index: 3;
      width: 950;
      object-fit: cover;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    }
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    width: 1580px;
    padding: 50px;
    background-color: white;
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    border: none;
    .catalog {
      gap: 10px;
      display: flex;
      justify-content: space-between;
      padding: 20px;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
`;
