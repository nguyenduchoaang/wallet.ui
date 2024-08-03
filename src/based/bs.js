import styled, { keyframes, css } from "styled-components";
import { NOTIFY } from "./Constant";
const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideOutLeft = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(100%);
  }
`;

const NotifyWrapper = styled.div`
  position: fixed;
  top: 4px;
  right: 6px;
  z-index: 1000;
`;

const NotifyMessage = styled.div`
  background-color: ${({ type }) => {
    switch (type) {
      case NOTIFY.SUCCESS:
        return "#68B984";
      case NOTIFY.WARNING:
        return "orange";
      case NOTIFY.ERROR:
        return "red";
      case NOTIFY.INFO:
        return "#FED049";
      default:
        return "blue";
    }
  }};
  position: relative;
  color: white;
  width: 80dvw;
  max-width: 360px;
  height: 60px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  justify-content: center;
  border-radius: 4px;
  animation: ${({ removing }) =>
    removing
      ? css`
          ${slideOutLeft} 0.5s ease-out
        `
      : css`
          ${slideInRight} 0.5s ease-out
        `};
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  cursor: pointer;
  .close_icon {
    position: absolute;
    right: 5px;
    top: 0px;
    cursor: pointer;
  }
  span {
    font-weight: 500;
    margin-left: 5px;
  }
`;

export { NotifyWrapper, NotifyMessage };
