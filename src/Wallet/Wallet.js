import React, { useRef, useState } from "react";
import { HeaderWallet, BodyWallet, FooterWallet } from "./wl";
import BaseWrapper from "../based/BaseWrapper";
import { Setting, Arrow } from "../based/ConfigSVG";
import SwiperCard from "../based/Card/SwiperCard";
import ButtonAction from "../based/ButtonAction";
import { Link } from "react-router-dom";
import { CardArray, ConfigMenu } from "../based/Data";
import { useNotification } from "../based/Notify";
import { NOTIFY } from "../based/Constant";

export default function Wallet() {
  const showNotification = useNotification();
  return (
    <>
      <BaseWrapper
        props={{
          display: "flex",
          justify: "space-between",
          flexDirection: "column",
        }}
      >
        <HeaderWallet>
          <div className="left_header">
            <h2>Wallet</h2>
            <p>The wallet for your digital assets</p>
          </div>
          <div className="right_header">
            <Setting width="40" height="50" />
          </div>
        </HeaderWallet>

        <BodyWallet>
          <SwiperCard data={CardArray} />
        </BodyWallet>

        <FooterWallet>
          <ButtonAction
            props={{
              width: "56px",
              height: "56px",
              bg: "rgba(255, 255, 255, 0.34)",
              radius: "16px",
            }}
          >
            <Link to="/">
              {" "}
              <Arrow.LeftArrow width="18" height="18" fill="#ffff" />
            </Link>
          </ButtonAction>
          {ConfigMenu.map((item, index) => (
            <ButtonAction
              key={index}
              props={{
                width: "56px",
                height: "56px",
                bg: "rgba(255, 255, 255, 0.34)",
                radius: "16px",
              }}
            >
              <div
                className="button_mean"
                onClick={() =>
                  showNotification(
                    "Tính năng đang được phát triển",
                    NOTIFY.INFO
                  )
                }
              >
                {item.icon}
                <span>{item.name}</span>
              </div>
            </ButtonAction>
          ))}
        </FooterWallet>
      </BaseWrapper>
    </>
  );
}
