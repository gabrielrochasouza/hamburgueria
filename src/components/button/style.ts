import styled,{css} from "styled-components";

interface PropsType {
  isGrey: boolean;
}

export const Btn = styled.button`
  width: 100%;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  height: 60px;
  margin: 0 0 15px 0;
  font-size: 16px;
  height: 60px;

  background-color: ${(props: PropsType) =>
    props.isGrey ? "var(--grey-100)" : "var(--green)"};
  color: ${(props: PropsType) =>
    props.isGrey ? "var(--black)" : "var(--green-btn-text-color)"};

  :hover {
    background-color: ${(props: PropsType) =>
      props.isGrey ? "var(--black)" : "var(--green-hover)"};
    color: ${(props: PropsType) =>
      props.isGrey ? "var(--white)" : "var(--green-btn-text-color)"};
  }
  
`;
