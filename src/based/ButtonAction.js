/**
 * @explain base Button action for project
 * @param {children}
 * @param {object} props
 */

import styled from "styled-components";

const ButtonAction = ({ children, props }) => {
  return (
    <ButtonWrapper
      width={props.width}
      height={props.height}
      border={props.border}
      color={props.color}
      bg={props.bg}
      radius={props.radius}
    >
      {children}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  background: ${(props) => (props.bg ? props.bg : "rgba(255, 255, 255, 0.34)")};
  border-radius: ${(props) => (props.radius ? props.radius : "6px")};
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "100%")};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ButtonAction;
