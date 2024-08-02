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
  height: 60%;
`;
const FooterWallet = styled.div`
  height: 20%;
`;

export { HeaderWallet, BodyWallet, FooterWallet };
