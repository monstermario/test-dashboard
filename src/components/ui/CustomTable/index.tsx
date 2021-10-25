import React, { useState } from 'react';
import styled from 'styled-components';
import { success, warn } from '../../../styles/Colors';
import { PositionData } from '../../dashboard/ContentDashboard';
import { IconDown } from '../Icon';
import { Button, ColoredText, Table, Td, Th } from './StylesTable';
interface DropMenuProps {
  isVisible: boolean;
}

declare type PageProps = {
  lists: PositionData[];
};

export const CustomTable = ({ lists }: PageProps) => {
  return (
    <Table>
      <table>
        <thead>
          <Th>CURRENCY</Th>
          <Th>POSITION</Th>
          <Th>EXPIRY</Th>
          <Th>SIZE</Th>
          <Th>COST</Th>
          <Th>P&L</Th>
          <Th></Th>
        </thead>
        <tbody>
          {lists &&
            lists.map((item: PositionData, index: number) => (
              <tr key={`position-${index}`}>
                <Td>
                  <img src={item.icon} alt="" />
                  {item.currency}
                </Td>
                <Td>
                  <img
                    src={`/assets/img/${
                      item.position === 'Call' ? 'up' : 'down'
                    }.png`}
                    alt=""
                  />
                  <b>{`$${item.amount} ${item.position}`}</b>
                </Td>
                <Td>{item.expiry}</Td>
                <Td>{`${item.size.toFixed(4)} ${item.currency}`}</Td>
                <Td>${item.cost}</Td>
                <Td>
                  <ColoredText
                    color={item.position == 'Call' ? warn : success}
                  >{`${item.position == 'Call' ? '+$' : '-$'}${
                    item.pl
                  }`}</ColoredText>
                </Td>
                <Td width="110px">
                  <Button>Sell Position</Button>
                </Td>
              </tr>
            ))}
        </tbody>
      </table>
    </Table>
  );
};
