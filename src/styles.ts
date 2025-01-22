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
  h1 {
    font-size: 40px;
    text-align: center;
    margin-bottom: 10px;
  }
  p {
    font-size: 26px;
    color: gray;
  }
  .modal {
    position: absolute;
    display: block;
    z-index: 2;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      transition: 0.5s all ease-in-out;
      z-index: 3;
      width: 80%;
      border-radius: 8px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    }
    img:hover {
      transform: scale(1.05);
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
