import React, { useState } from 'react';
import { PositionData } from '../../pages/dashboard';
import { CustomTable } from '../ui/CustomTable';
import {
  Content,
  TabContent,
  TabGroup,
  TabHeader,
  TabOpen,
  TabStyle,
} from './StylesContent';

declare type PageProps = {
  positions: PositionData[];
};
export const ContentDashboard = ({ positions }: PageProps) => {
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
