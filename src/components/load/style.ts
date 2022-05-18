import styled from "styled-components";

export const Loading = styled.div`
  margin: 120px auto 0;
  width: 100%;
  text-align: center;
  svg {
    margin: 10px 0;
    animation: rotation infinite 1s linear;
    width: 60px;
    height: 60px;
    color: var(--green);
  }
  p {
    color: var(--green);
    margin: 20px 0;
  }
`;
