import React from 'react';
import styled from 'styled-components';
import { ContentDashboard } from '../../components/dashboard/ContentDashboard';
import { Filters } from '../../components/dashboard/Filters';
import { Layout } from '../../components/layout';

const PageDashboard = styled.div`
  display: flex;
  height: 100%;
`;

export const Dashboard: React.FC = () => {
  return (
    <Layout>
      <PageDashboard>
        <Filters />
        <ContentDashboard />
      </PageDashboard>
    </Layout>
  );
};
