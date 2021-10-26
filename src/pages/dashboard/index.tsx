import React, { useState } from 'react';
import styled from 'styled-components';
import { ContentDashboard } from '../../components/dashboard/ContentDashboard';
import { Filters } from '../../components/dashboard/Filters';
import { Layout } from '../../components/layout';

const PageDashboard = styled.div`
  display: flex;
  height: 100%;
`;

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

const positions: PositionData[] = [
  {
    currency: 'ETH',
    icon: '/assets/img/ethereum.png',
    position: 'Call',
    amount: 3679.74,
    expiry: 'Oct 22nd, 2021, 10:00 AM',
    size: 1,
    cost: 512.36,
    pl: 1.12,
  },
  {
    currency: 'ETH',
    icon: '/assets/img/ethereum.png',
    position: 'Put',
    amount: 4215.12,
    expiry: 'Oct 22nd, 2021, 10:00 AM',
    size: 1,
    cost: 512.36,
    pl: 4.15,
  },
  {
    currency: 'ETH',
    icon: '/assets/img/ethereum.png',
    position: 'Call',
    amount: 3679.74,
    expiry: 'Oct 29th, 2021, 10:00 AM',
    size: 1,
    cost: 512.36,
    pl: 1.12,
  },
  {
    currency: 'ETH',
    icon: '/assets/img/ethereum.png',
    position: 'Put',
    amount: 4215.12,
    expiry: 'Nov 19th, 2021, 10:00 AM',
    size: 1,
    cost: 512.36,
    pl: 4.15,
  },
];

export const Dashboard: React.FC = () => {
  const [filters, setFilters] = useState<string[]>([]);

  const updateFilter = (newFilters: string[]) => {
    setFilters(newFilters);
    console.log(newFilters);
  };

  return (
    <Layout>
      <PageDashboard>
        <Filters filterList={filters} handleFilter={updateFilter} />
        <ContentDashboard
          positions={positions.filter(
            (item: PositionData) =>
              filters.includes(item.expiry) || filters.length === 0,
          )}
        />
      </PageDashboard>
    </Layout>
  );
};
