import styled from "styled-components";
import { grey, pink } from "../../styles/Colors";
import { borderRadius } from "../../styles/Constants";

export const Content = styled.div`
  width: 100%;
  background: #FFFFFF;
  border-radius: 16px;
  height: calc(100% - 60px);
  overflow-y: auto;
`;

export const TabHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  padding: 0 24px;
`;

export const TabGroup = styled.div<{background: string}>`
  display: flex;
  align-items: center;
  background: ${props=>props.background};
  border-radius: ${borderRadius};
`;

export const TabOpen = styled.p<{ active: boolean }>`
  width: 150px;
  padding: 20px 0 16px;
  text-align: center;
  cursor: pointer;
  margin-bottom: -2px;
  border-bottom: 4px solid ${(props) => props.active ? pink : 'transparent'};
  color: ${(props) => props.active ? pink : grey};
`;

export const TabStyle = styled.p<{ active: boolean }>`
  width: 160px;
  text-align: center;
  cursor: pointer;
  border-radius: ${borderRadius};
  ${(props) => props.active ? `
    line-height: 39px;
    box-shadow: 0px 2px 4px rgba(60, 70, 73, 0.08), 0px 0px 1px rgba(60, 70, 73, 0.16), 0px 4px 6px rgba(60, 70, 73, 0.08);
    backdrop-filter: blur(64px);
    color: black;
    background: white;
  ` : `
    line-height: 40px;
    color: grey;
  `}
`;

export const TabContent = styled.div`
  padding: 26px 24px;
`;