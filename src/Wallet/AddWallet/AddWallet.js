import React, { useState, useReducer } from "react";
import backgroundImg from "../../assets/background.jpg";
import { Arrow, Tick } from "../../based/ConfigSVG";
import {
  AddWalletW,
  AddWalletWrapper,
  CreateNewWalletWrapper,
  SeedPhraseWrapper,
  ActionCreateWallet,
} from "./aw";
import reducer, { initialState } from "../store/reducer";
import SeedPhraseCard from "../../based/SeedPhraseCard";
import { Link } from "react-router-dom";
import BaseWrapper from "../../based/BaseWrapper";

export default function AddWallet() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [checkbox, setCheckbox] = useState(true);
  const [showSeedPhrase, setShowSeedPhrase] = useState(false);
  const seedPhrase = state.seedPhrase;
  const repeatedSeedPhrase = Array.from({ length: 4 }, () => seedPhrase).flat();

  return (
    <BaseWrapper className="add_wrapper" backgroundImg={backgroundImg}>
      <AddWalletW>
        <div className="header_add_wallet">
          <h1>Add Wallet</h1>
          <p>Your key to the world of crypto</p>
        </div>
        <div className="sub_title">
          <p>Choose a way to add your wallet</p>
          <CreateNewWalletWrapper onClick={() => setShowSeedPhrase(true)}>
            <h2>Create a new wallet</h2>
            <div className="arrow_right">
              <Arrow.RightArrow width="18px" height="18px" />
            </div>
          </CreateNewWalletWrapper>
        </div>
        <div className="left_arrow">
          <Arrow.LeftArrow width="17.5px" height="17.5px" />
        </div>
      </AddWalletW>

      <SeedPhraseWrapper
        className="seed_phrase_wrapper"
        backgroundImg={backgroundImg}
        display={showSeedPhrase ? "flex" : "none"}
      >
        <div className="seed_phrase_header">
          <h1>Seed Phrase</h1>
          <SeedPhraseCard
            showSeedPhrase={showSeedPhrase}
            repeatedSeedPhrase={repeatedSeedPhrase}
          ></SeedPhraseCard>
        </div>
        <ActionCreateWallet>
          <div className="confirm">
            <div
              className="checkbox"
              onClick={() => {
                setCheckbox(!checkbox);
              }}
            >
              <div className="input_checkbox">
                <Tick.Circle width="24px" height="24px" />
                {checkbox && (
                  <div className="tick_done">
                    <Tick.Original width="16px" height="16px" />
                  </div>
                )}
              </div>
            </div>
            <p className="confirm_text">
              I understand that if i lose my seed phrase, I’ll lose all of the
              crypto in my wallet. <span>Learn more</span>
            </p>
          </div>
          <div className="confirm_action">
            <div
              className="arrow_back"
              onClick={() => {
                setShowSeedPhrase(false);
              }}
            >
              <Arrow.LeftArrow width="17.5px" height="17.5px" />
            </div>
            <Link to="/wallet" className="confirm_button">
              <p>CREATE A WALLET</p>
            </Link>
          </div>
        </ActionCreateWallet>
      </SeedPhraseWrapper>
    </BaseWrapper>
  );
}
