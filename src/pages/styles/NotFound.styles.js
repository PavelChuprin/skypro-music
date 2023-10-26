import { styled } from "styled-components";

export const PageContainer = styled.div`
  max-width: 100%;
  height: 100vh;
  background-color: #181818;
`;

export const ModalForm = styled.div`
  --modal-width: 460px;
  --modal-height: 366px;

  position: absolute;
  left: calc(50% - (var(--modal-width) / 2));
  top: calc(50% - (var(--modal-height) / 2));
  box-sizing: border-box;
  width: var(--modal-width);
  min-height: var(--modal-height);
  background-color: #181818;
  border-radius: 12px;
  padding: 43px 47px 47px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 160px;
  font-style: normal;
  font-weight: 400;
  line-height: 168px;
  padding-bottom: 3px;
`;

export const Text = styled.div`
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
`;
export const Block = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 10px;
`;

export const Subtext = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.054px;
  color: #4e4e4e;
  text-align: center;
  padding-bottom: 36px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  width: 278px;
  height: 52px;
  border-radius: 6px;
  border: none;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;

  &:disabled {
    background-color: #303030;
  }
`;

export const PrimaryButton = styled(Button)`
  color: #ffffff;
  background-color: #580ea2;
  &:hover {
    background-color: #3f007d;
  }

  &:active {
    background-color: #271a58;
  }
`;
