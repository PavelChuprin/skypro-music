import { styled } from "styled-components";

export const MainCenterblock = styled.div`
  width: auto;
  -webkit-box-flex: 3;
  -ms-flex-positive: 3;
  flex-grow: 3;
  padding: 20px 40px 20px 111px;
`;

export const CenterblockH2 = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.8px;
  margin-bottom: 45px;
  position: relative;
`;

export const CategoryCount = styled.div`
  font-size: 36px;
  position: absolute;
  left: -48px;
  top: -28px;
  width: 48px;
  height: 48px;
  background: -webkit-linear-gradient(-45deg, #ad61ff, #d9b6ff);
  border-radius: 50%;
  align-items: center;
  color: white;
  display: flex;
  justify-content: center;
`;

export const CenterblockContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;

export const SidebarPersonalBlock = styled.div`
  max-width: 418px;
  padding: 20px 90px 20px 78px;
`;
