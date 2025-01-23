import styled from "styled-components";

export const CardComponent = styled.div`
  transition: all 0.4s ease-in-out;
  img {
    width: 100%;
    height: 204px;
    object-position: center;
    overflow: hidden;
    object-fit: cover;
  }
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
  .card-body {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: solid 1px rgba(0, 0, 0, 0.1);
  }
`;
