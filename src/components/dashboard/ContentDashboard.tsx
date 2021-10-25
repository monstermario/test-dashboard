import React, { useState } from 'react';
import { CustomTable } from '../ui/CustomTable';
import {
  Content,
  TabContent,
  TabGroup,
  TabHeader,
  TabOpen,
  TabStyle,
} from './StylesContent';

export type PositionData = {
  currency: string;
  icon: string;
  position: string;
  amount: number;
  expiry: string;
  size: number;
  cost: number;
  pl: number;
};

export const ContentDashboard: React.FC = () => {
  const positions: PositionData[] = [
    {
      currency: 'ETH',
      icon: '/assets/img/ethereum.png',
      position: 'Call',
      amount: 3679.74,
      expiry: 'Oct 18th',
      size: 1,
      cost: 512.36,
      pl: 1.12,
    },
    {
      currency: 'ETH',
      icon: '/assets/img/ethereum.png',
      position: 'Put',
      amount: 4215.12,
      expiry: 'Oct 18th',
      size: 1,
      cost: 512.36,
      pl: 4.15,
    },
    {
      currency: 'ETH',
      icon: '/assets/img/ethereum.png',
      position: 'Call',
      amount: 3679.74,
      expiry: 'Oct 18th',
      size: 1,
      cost: 512.36,
      pl: 1.12,
    },
    {
      currency: 'ETH',
      icon: '/assets/img/ethereum.png',
      position: 'Put',
      amount: 4215.12,
      expiry: 'Oct 18th',
      size: 1,
      cost: 512.36,
      pl: 4.15,
    },
  ];
  const [isOpenTab, setIsOpenTab] = useState<boolean>(true);
  const [isAmericanStyle, setIsAmericanStyle] = useState<boolean>(false);

  return (
    <Content>
      <TabHeader>
        <TabGroup background={'transparent'}>
          <TabOpen
            active={isOpenTab}
            onClick={() => {
              setIsOpenTab(true);
            }}
          >
            Open positions
          </TabOpen>
          <TabOpen
            active={!isOpenTab}
            onClick={() => {
              setIsOpenTab(false);
            }}
          >
            Closed positions
          </TabOpen>
        </TabGroup>

        <TabGroup background="#EEEEEE">
          <TabStyle
            active={isAmericanStyle}
            onClick={() => {
              setIsAmericanStyle(true);
            }}
          >
            American-Style
          </TabStyle>
          <TabStyle
            active={!isAmericanStyle}
            onClick={() => {
              setIsAmericanStyle(false);
            }}
          >
            European-Style
          </TabStyle>
        </TabGroup>
      </TabHeader>

      <TabContent>
        {isOpenTab ? <CustomTable lists={positions} /> : <div>Coming Soon</div>}
      </TabContent>
    </Content>
  );
};
