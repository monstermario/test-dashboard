import styled from "styled-components";
import { borderRadius } from "../../styles/Constants";


export const Filter = styled.div`
  width: 287px;
  margin-right: 31px;
  flex-shrink: 0;
  @media (max-width: 1079px) {
    margin-left: -316px;
  }
`;

export const FilterTitle = styled.h1`
  font-size: 18px;
  line-height: 21px;
  margin: 20px 0 14px;
`;

export const FilterByDate = styled.div`
  max-height: 213px;
`;

export const FilterByAssets = styled.div < { maxHeight: string }>`
  max-height: ${props=>props.maxHeight};
  padding: 15px;
  background: #EEEEEE;
  border-radius: ${borderRadius};
  overflow-y: auto;
  margin-bottom: 20px;

  p {
    font-size: 12px;
    line-height: 14px;
    color: #555555;
    margin-bottom: 10px;
  }

  &>input {
    border: 1px solid #ddd;
    border-radius: ${borderRadius};
    font-size: 13px;
    line-height: 16px;
    width: -webkit-fill-available;
    height: 40px;
    padding-left: 40px;
    margin-bottom: 20px;
    outline-color: #bbb;
    background: url('/assets/img/search.png') 10px center no-repeat, #ddd;
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  padding: 0;
`;

export const StyledLi = styled.li`
  display: flex;
  align-items: center;
  font-size: 15px;
  line-height: 18px;
  margin-bottom: 15px;

  img {
    margin: 0 10px;
  }
  
  input {
    width: 20px;
    height: 20px;
  }
`;