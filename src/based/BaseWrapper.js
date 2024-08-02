/**
 *  @explain base wrapper for all pages
 *  @use styled-components for styling
 */

import styled from "styled-components";
import backgroundImg from "../assets/background.jpg";
const BaseWrapper = ({ children }) => {
  return (
    <BaseWrapperWrapper backgroundImg={backgroundImg}>
      {children}
    </BaseWrapperWrapper>
  );
};
const BaseWrapperWrapper = styled.div`
  height: 100vh;
  position: fixed;
  width: 100vw;
  background-image: url(${(props) => props.backgroundImg});
  background-size: cover;
  color: var(--white-color);
`;

export default BaseWrapper;
