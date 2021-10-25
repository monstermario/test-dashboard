import React from 'react';
import styled from 'styled-components';
import { Navbar } from '../../components/navbar';

const LayoutContent = styled.div`
  height: calc(100vh - 80px);
`;

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <LayoutContent>{children}</LayoutContent>
    </>
  );
};
