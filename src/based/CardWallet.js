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
              <ButtonAction
                props={{
                  width: "24px",
                  height: "24px",
                  justify: "center",
                  align: "center",
                }}
              >
                <Copy width="16" height="16" />
              </ButtonAction>
            </h4>
            <p>{address}</p>
          </div>
        </div>
        <div className="card_wallet_body">
          <div className="body_top">
            <h4>BALANCE</h4>
            <span>
              <div className="dot"></div>
            </span>
            <p>MTD</p>
          </div>
          <div className="body_bottom">
            <p>{balance} wei</p>
          </div>
        </div>
      </CardInner>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Inter", sans-serif;
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: "Inter", sans-serif;

  .card_wallet_header {
    display: flex;
    font-family: "Inter", sans-serif;
    justify-content: space-between;
    width: 100%;
    margin-top: 24px;
    flex-direction: column;
    .name_left {
      h4 {
        font-family: "Inter", sans-serif;
        font-size: 15px;
        font-weight: 500;
        line-height: 14.52px;
        letter-spacing: -0.02em;
        text-align: left;
        margin-bottom: 8px;
      }
      p {
        font-family: "Inter", sans-serif;
        font-size: 22px;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: -0.02em;
        text-align: left;
      }
    }
    .name_right {
      font-family: "Inter", sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .info_name {
      width: 100%;
      font-family: "Inter", sans-serif;
      display: flex;
      justify-content: space-between;
    }
    .info_address {
      font-family: "Inter", sans-serif;
      margin-top: 21px;
      h4 {
        margin-bottom: 12px;
        font-family: "Inter", sans-serif;
        span {
          font-family: "Inter", sans-serif;
          margin-right: 8px;
        }
        display: flex;
        align-items: center;
      }
      p {
        font-family: "Inter", sans-serif;
        font-size: 20px;
        font-weight: 400;
        line-height: 26px;
        text-align: left;
      }
    }
  }
  .card_wallet_body {
    background: rgba(245, 245, 245, 0.12);
    border-radius: 16px;
    padding: 13px 16px;
    display: flex;
    flex-direction: column;
    .body_top {
      display: flex;
      align-items: center;
      h4 {
        font-family: "Inter", sans-serif;
        font-size: 12px;
        font-weight: 400;
        line-height: 14.52px;
        letter-spacing: -0.02em;
        text-align: left;
      }
      p {
        font-family: "Inter", sans-serif;
        font-size: 12px;
        font-weight: 700;
        line-height: 14.52px;
        letter-spacing: -0.02em;
        text-align: left;
      }
      span {
        margin: 0 8px;
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        .dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #fff;
        }
      }
    }
    .body_bottom {
      p {
        font-family: "Inter", sans-serif;
        font-size: 20px;
        font-weight: 700;
        line-height: 22px;
        letter-spacing: -0.02em;
        text-align: left;
      }
    }
  }
`;
