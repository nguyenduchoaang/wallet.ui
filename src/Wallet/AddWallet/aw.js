/**
 * @explain style file for AddWallet
 * @use styled-components for styling
 * @param props
 */
import styled, { keyframes } from "styled-components";

const slideFromRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const AddWalletWrapper = styled.div`
  height: 100dvh;
  position: fixed;
  width: 100vw;
  background-image: url(${(props) => props.backgroundImg});
  background-size: cover;
  color: var(--white-color);
`;

const AddWalletW = styled.div`
  color: var(--white-color);
  padding: 20px;

  h1 {
    font-size: 22px;
    font-weight: 700;
    line-height: 22px;
    margin-top: 36px;
    margin-bottom: 8px;
    text-align: left;
  }
  p {
    font-family: Clear Sans;
    font-size: 15px;
    font-weight: 400;
    line-height: 20.28px;
    text-align: left;
  }
  .sub_title {
    margin-top: 24px;
    p {
      margin-bottom: 16px;
      font-size: 17px;
      font-weight: 500;
      line-height: 22.98px;
      text-align: left;
    }
  }
  .left_arrow {
    position: absolute;
    bottom: 20px;
    left: 20px;
    width: 56px;
    height: 56px;
    border-radius: 12px;
    opacity: 0px;
    background-color: var(--white-color);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const CreateNewWalletWrapper = styled.div`
  width: 100%;
  height: 56px;
  background-color: var(--white-color);
  color: var(--black-color);
  font-size: 14px;
  display: flex;
  font-weight: 500;
  align-items: center;
  position: relative;
  border-radius: 8px;
  padding: 17px 16px 18px 16px;
  .arrow_right {
    position: absolute;
    right: 16px;
    top: 35%;
    transform: translateY;
  }
`;
const SeedPhraseWrapper = styled.div`
  height: 100dvh;

  position: absolute;
  width: 100vw;
  top: 0;
  padding: 20px;
  display: ${(props) => props.display};
  background-image: url(${(props) => props.backgroundImg});
  animation: ${slideFromRight} 0.5s ease-out;
  flex-direction: column;
  justify-content: space-between;
  background-size: cover;
  h1 {
    font-size: 22px;
    font-weight: 700;
    line-height: 22px;
    margin-top: 36px;
    margin-bottom: 16px;
    text-align: left;
  }
`;

const ActionCreateWallet = styled.div`
  margin-bottom: 16px;
  .confirm {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 17.5px;
  }
  .checkbox {
    display: flex;
    width: 13%;
    position: relative;
    align-items: center;
    margin-right: 16px;
    .input_checkbox {
      position: relative;
      display: flex;
      align-items: center;
    }
    .tick_done {
      position: absolute;
      left: 4px;
      top: 2px;
    }
  }
  .confirm_text {
    font-size: 13px;
    font-weight: 400;
    text-align: left;
    span {
      text-decoration: underline;
    }
  }
  .confirm_action {
    width: 100%;
    height: 58px;
    border-radius: 12px;
    display: flex;
    .confirm_button {
      width: 100%;
      font-size: 16px;
      font-weight: 700;
      text-align: center;
      color: var(--black-color);
      display: flex;
      justify-content: center;
      border-radius: 0 12px 12px 0;
      align-items: center;
      background: rgba(255, 255, 255, 0.75);
    }
  }
  .arrow_back {
    width: 56px;
    height: 58px;
    border-radius: 12px 0px 0px 12px;
    opacity: 0px;
    background: rgba(255, 255, 255, 0.35);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export {
  AddWalletWrapper,
  AddWalletW,
  CreateNewWalletWrapper,
  SeedPhraseWrapper,
  ActionCreateWallet,
};
