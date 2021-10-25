import { Link } from "react-router-dom";
import styled from "styled-components";
import { borderRadius } from "../../styles/Constants";


export const NavBar = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledLink  = styled(Link)`
  padding: 0px 5px;
  height: 40px;
  line-height: 40px;
  margin-left: 26px;
  border-radius: ${borderRadius};
`;

export const StyledCurrentLink  = styled(StyledLink)`
  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(60, 70, 73, 0.08), 0px 0px 1px rgba(60, 70, 73, 0.16), 0px 4px 6px rgba(60, 70, 73, 0.08);
  backdrop-filter: blur(64px);
`;

export const Logo = styled.div`
  width: 29px;
  height: 29px;
`;

export const Wallet = styled.div`
  display: flex;
  align-items: center;
  padding: 4px;
  border-radius: ${borderRadius};
  font-size: 15px;
  line-height: 18px;
  border: 1px solid #DDDDDD;
  margin-left: 10px;
`;

export const Balance = styled.div`
  display: flex;
  align-items: center;
  background: #EEEEEE;
  border: 1px solid #DDDDDD;
  border-radius: ${borderRadius};
  padding: 4px 6px;
  margin-right: 14px;
`;

export const Metamask = styled.div`
  margin-left: 10px;
  margin-right: 6px;
  width: 20px;
  hegith: 20px;
`;

export const BtnMore = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid #ddd;
  margin-left: 10px;
  cursor: pointer;
  border-radius: ${borderRadius};
`;
