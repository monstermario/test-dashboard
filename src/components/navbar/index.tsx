import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CustomDropDown } from '../ui/CustomDropDown';
import { shortAddress } from '../utils';
import {
  NavBar,
  StyledLink,
  StyledCurrentLink,
  FlexBox,
  Logo,
  Wallet,
  Balance,
  Metamask,
  BtnMore,
} from './StyleNavbar';
declare type Nav = {
  title: string;
  url: string;
};
export type SelectItem = {
  name: string;
  icon: string;
};
export const Navbar: React.FC = () => {
  const navs: Nav[] = [
    {
      title: 'Dashboard',
      url: '/',
    },
    {
      title: 'Trade',
      url: '/trade',
    },
    {
      title: 'Pools',
      url: '/pools',
    },
  ];

  const networks: SelectItem[] = [
    {
      name: 'Ethereum',
      icon: '/assets/img/ethereum.png',
    },
    {
      name: 'Bitcoin',
      icon: '/assets/img/bitcoin.png',
    },
    {
      name: 'Compound',
      icon: '/assets/img/compound.png',
    },
    {
      name: 'IOTA',
      icon: '/assets/img/IOTA.png',
    },
  ];

  const history = useHistory();
  const [selectedItem, setSelectedItem] = useState<SelectItem>(networks[0]);
  const [currentRoute, setCurrentRoute] = useState<string>('/');
  const [account, setAccount] = useState<string>('');

  useEffect(() => {
    setAccount('0xB102e7816F94455Bdf24699F9D0F80DE055C1071');
  }, []);

  useEffect(() => {
    setCurrentRoute(history.location.pathname);
  }, [history.location.pathname]);

  return (
    <NavBar>
      <FlexBox>
        <Logo>
          <img src="/assets/img/logo.png" width="100%" height="100%" alt="" />
        </Logo>

        {navs.map((nav: Nav, index: number) =>
          currentRoute === nav.url ? (
            <StyledCurrentLink to={nav.url} key={`nav-item-${index}`}>
              {nav.title}
            </StyledCurrentLink>
          ) : (
            <StyledLink to={nav.url} key={`nav-item-${index}`}>
              {nav.title}
            </StyledLink>
          ),
        )}
      </FlexBox>

      <FlexBox>
        <CustomDropDown
          item={selectedItem}
          lists={networks}
          handleSelect={(item: SelectItem) => {
            setSelectedItem(item);
          }}
        />

        <Wallet>
          <Balance>
            <img src="/assets/img/USD.png" alt="USD" />
            1,410,95
          </Balance>
          {shortAddress(account)}
          <Metamask>
            <img src="/assets/img/metamask.png" alt="" />
          </Metamask>
        </Wallet>

        <BtnMore>
          <img src="/assets/img/more.png" alt="" />
        </BtnMore>
      </FlexBox>
    </NavBar>
  );
};
