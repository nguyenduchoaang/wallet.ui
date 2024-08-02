import styled from "styled-components";
import { Scan, Copy } from "./ConfigSVG";
import ButtonAction from "./ButtonAction";

export const CardWallet = (props) => {
  const { name, address, balance, color } = props;
  console.log(color.background);
  return (
    <CardWrapper>
      <CardInner bgColor={color.background}>
        <div className="card_wallet_header">
          <div className="info_name">
            <div className="name_left">
              <h4>Name</h4>
              <p>{name}</p>
            </div>
            <div className="name_right">
              <Scan width="30" height="30" />
            </div>
          </div>
          <div className="info_address">
            <h4>
              <span>Address</span>
              <ButtonAction props={{ width: "34px", height: "34px" }}>
                <Copy width="20" height="20" />
              </ButtonAction>
            </h4>
            <p>{address}</p>
          </div>
        </div>
        <div className="card_wallet_body"></div>
      </CardInner>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardInner = styled.div`
  width: 85%;
  height: 450px;
  top: 158px;
  left: 33px;
  gap: 0px;
  opacity: 0px;
  border-radius: 36px;
  padding: 24px 32px;
  background: ${(props) => props.bgColor};
  .card_wallet_header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 24px;
    flex-direction: column;
    .name_left {
      h4 {
        font-size: 15px;
        font-weight: 500;
        line-height: 14.52px;
        letter-spacing: -0.02em;
        text-align: left;
        margin-bottom: 8px;
      }
      p {
        font-size: 22px;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: -0.02em;
        text-align: left;
      }
    }
    .name_right {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .info_name {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    .info_address {
      margin-top: 21px;
      h4 {
        margin-bottom: 12px;

        span {
          margin-right: 8px;
        }
        display: flex;
        align-items: center;
      }
    }
  }
`;
