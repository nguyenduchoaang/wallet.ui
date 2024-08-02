import React, { useRef, useState } from "react";
import { HeaderWallet, BodyWallet, FooterWallet } from "./wl";
import BaseWrapper from "../based/BaseWrapper";
import { Setting, Line, Arrow } from "../based/ConfigSVG";
import SwiperCard from "../based/SwiperCard";
import ButtonAction from "../based/ButtonAction";

const CardArray = [
  {
    name: "Christopher Victory",
    address: "0x4b5e9f5f",
    balance: "0.0001",
    color1: "rgba(204, 224, 255, 1)",
    color2: "rgba(138, 46, 255, 1)",
  },
  {
    name: "Amanda Johnson",
    address: "0x654bq2dwd",
    balance: "0.0001",
    color1: "rgba(248, 255, 237, 1)",
    color2: "rgba(73, 221, 105, 1)",
  },
  {
    name: " John Doe",
    address: "0x90345295f",
    balance: "0.0001",
    color1: "rgba(204, 224, 255, 1)",
    color2: "rgba(138, 46, 255, 1)",
  },
];

const ConfigMenu = [
  {
    name: "History",
    icon: <Line.LineUp width="24" height="24" />,
  },
  {
    name: "Send",
    icon: <Line.Send width="24" height="24" />,
  },
  {
    name: "Receive",
    icon: <Line.Receive width="24" height="24" />,
  },
];

export default function Wallet() {
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
            <Arrow.LeftArrow width="18" height="18" fill="#ffff" />
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
              <div className="button_mean">
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
