import styled from "styled-components";

export const Table = styled.div`
  width: 100%;
  min-width: 650px;
  overflow-x: auto;
  table{
    width: 100%;
  }
`;

export const Th = styled.th`
  color: rbga(0,0,0,0.7);
  font-size: 13px;
  line-height: 20px;
  text-align: left;
`;

export const Td = styled.td`
  font-size: 15px;
  line-height: 18px;
  img{
    vertical-align: middle;
    margin-right: 10px;
  }
`;

export const ColoredText = styled.span<{ color: string }>`
  font-weight: bold;
  color: ${props => props.color};
`;

export const Button = styled.button`
  line-height: 40px;
  padding: 0 8px;
  outline: none;
  border: none;
  background: white;
  font-weight: bold;
  box-shadow: 0px 2px 4px rgba(60, 70, 73, 0.08), 0px 0px 1px rgba(60, 70, 73, 0.16), 0px 4px 6px rgba(60, 70, 73, 0.08);
  backdrop-filter: blur(64px);
  border-radius: 5px;
`;