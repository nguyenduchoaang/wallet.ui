/**
 * @explain style file for Wallet page
 * @use styled-components for styling
 * @param props
 */
import styled from "styled-components";

const HeaderWallet = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 76px;
  align-items: center;
  margin-bottom: 31px;
  h2 {
    font-size: 28px;
    font-weight: 700;
    line-height: 22px;
    text-align: left;
    margin-bottom: 8px;
  }
  p {
    font-size: 15px;
    font-weight: 400;
    line-height: 20.28px;
    text-align: left;
  }
  .left_header {
  }
  .right_header {
    display: flex;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.34);
  }
`;
const BodyWallet = styled.div`
  height: 75%;
`;
const FooterWallet = styled.div`
  height: 20%;
  display: flex;
  padding: 0 37px;
  justify-content: space-between;
  align-items: center;
  .button_mean {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    span {
      font-family: "Clear Sans" Medium;
      font-size: 11px;
      font-weight: 500;
      line-height: 13px;
      text-align: center;
    }
  }
`;

export { HeaderWallet, BodyWallet, FooterWallet };
