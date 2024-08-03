import styled from "styled-components";
import { Copy, Picture } from "../ConfigSVG";
export default function SeedPhraseCard(props) {
  const { repeatedSeedPhrase } = props;
  return (
    <SeedPhraseCardWrapper>
      <SeedPhrase className="seed_phrase">
        {repeatedSeedPhrase.map((item, index) => {
          return (
            <div key={index} className="seed_phrase_item">
              {item.phrase}
            </div>
          );
        })}
      </SeedPhrase>
      <div className="sub_title_seed_phrase">
        <p>
          Tap to copy, write down or capture your seed phrase and store in a
          secure place.
        </p>
        <div className="action_seed_phrase">
          <div className="icon copy_icon" onClick={() => props.handleCopy()}>
            <Copy width="16px" height="16px" />
          </div>
          <div className="icon picture_icon">
            <Picture
              width="20px"
              height="20px"
              onClick={() => props.handleCapture()}
            />
          </div>
        </div>
      </div>
    </SeedPhraseCardWrapper>
  );
}

const SeedPhraseCardWrapper = styled.div`
  width: 100%;
  .sub_title_seed_phrase {
    margin-top: 16px;
    display: flex;
    align-items: center;
    p {
      width: 70%;
      font-size: 13px;
      font-weight: 400;
      margin-right: 10px;
    }
  }
  .action_seed_phrase {
    display: flex;
    width: 25%;
    justify-content: space-between;
  }
  .icon {
    width: 40px;
    height: 40px;
    background-color: red;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.22);
  }
`;

const SeedPhrase = styled.div`
  width: 100%;
  height: auto;
  min-height: 188px;
  border-radius: 12px;
  color: var(--black-color);
  background: rgba(255, 255, 255, 0.35);
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 12px 18px 0 12px;

  .seed_phrase_item {
    width: 76px;
    margin-right: 4px;
    height: 24px;
    font-size: 14px;
    padding: 0px 6px 3px 6px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.35);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
