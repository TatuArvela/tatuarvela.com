import { ReactNode } from "react";
import styled from "styled-components";
import { PRIMARY, WHITE } from "styles/themeVariables";

type FormProps = {
  children?: ReactNode;
  toggled: boolean;
  height: string;
  dogEarSize: string;
};

const Form = styled.form<FormProps>`
  background-color: ${WHITE};
  box-shadow: 0 0 10px ${PRIMARY + "01"};
  box-sizing: border-box;
  clip-path: polygon(
    0 0,
    calc(100% - ${(props: FormProps) => props.dogEarSize}) 0,
    100% ${(props: FormProps) => props.dogEarSize},
    100% 100%,
    0 100%
  );
  color: ${PRIMARY};
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0.5rem;
  max-height: ${(props: FormProps) => props.height};
  max-width: 420px;
  padding: 3rem 2rem 1rem;
  position: relative;
  text-align: left;
  transform: ${(props: FormProps) =>
    props.toggled ? "scale(1)" : "scale(1.2)"};
  transition: transform 0.3s;
  width: 98vw;
  will-change: transform;
`;

export default Form;
