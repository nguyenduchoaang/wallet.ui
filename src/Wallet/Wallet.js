import React, { useRef, useState } from "react";
import { HeaderWallet, BodyWallet, FooterWallet } from "./wl";
import BaseWrapper from "../based/BaseWrapper";
import { Setting } from "../based/ConfigSVG";
import SwiperCard from "../based/SwiperCard";

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

export default function Wallet() {
  return (
    <>
      <BaseWrapper>
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
        <FooterWallet></FooterWallet>
      </BaseWrapper>
    </>
  );
}
