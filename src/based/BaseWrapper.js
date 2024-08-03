/**
 *  @explain base wrapper for all pages
 *  @use styled-components for styling
 *  @param {children}
 *  @param {object} props
 */

import styled from "styled-components";
import backgroundImg from "../assets/background.jpg";
const BaseWrapper = ({ children, props }) => {
  return (
    <BaseWrapperWrapper
      display={props?.display}
      justify={props?.justify}
      align={props?.align}
      flexDirection={props?.flexDirection}
      backgroundImg={backgroundImg}
    >
      {children}
    </BaseWrapperWrapper>
  );
};
const BaseWrapperWrapper = styled.div`
  height: 100dvh;

  position: fixed;
  width: 100vw;
  background-image: url(${(props) => props.backgroundImg});
  background-size: cover;
  color: var(--white-color);
  display: ${(props) => (props.display ? props.display : "")};
  justify-content: ${(props) => (props.justify ? props.justify : "")};
  align-items: ${(props) => (props.align ? props.align : "")};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : ""};
`;

export default BaseWrapper;
