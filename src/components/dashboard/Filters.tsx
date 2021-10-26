import React, { useState } from 'react';
import { SelectItem } from '../navbar';
import {
  Filter,
  FilterByAssets,
  FilterTitle,
  StyledLi,
  StyledUl,
} from './StylesFilter';

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

const expiryDates: string[] = [
  'Oct 22nd, 2021, 10:00 AM',
  'Oct 29th, 2021, 10:00 AM',
  'Nov 12th, 2021, 10:00 AM',
  'Nov 19th, 2021, 10:00 AM',
  'Nov 26th, 2021, 10:00 AM',
];

declare type PageProps = {
  filterList: string[];
  handleFilter: (newFilterList: string[]) => void;
};

export const Filters = ({ filterList, handleFilter }: PageProps) => {
  const [searchText, setSearchText] = useState<string>('');

  const updateFilter = (e: string) => {
    const index = filterList.indexOf(e);
    const newFilterList =
      index > -1
        ? filterList.filter((x: string) => x !== e)
        : filterList.concat([e]);
    handleFilter(newFilterList);
  };

  return (
    <Filter>
      <FilterTitle>Filter positions</FilterTitle>

      <FilterByAssets maxHeight="227px">
        <p>Filter by underlying asset</p>

        <input
          type="text"
          placeholder="Search name"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <StyledUl>
          {networks.map((item: SelectItem, index: number) => (
            <StyledLi key={`filter-network-${index}`}>
              <input type="checkbox" name="network" id={item.name} />
              <img src={item.icon} alt={item.name} />
              {item.name}
            </StyledLi>
          ))}
        </StyledUl>
      </FilterByAssets>

      <FilterByAssets maxHeight="213px">
        <p>Filter by expiry date</p>

        <StyledUl>
          {expiryDates.map((item: string, index: number) => (
            <StyledLi key={`filter-date-${index}`}>
              <input
                type="checkbox"
                name="expiryDate"
                id={`date-${index}`}
                onChange={(e) => {
                  updateFilter(item);
                }}
              />
              {item}
            </StyledLi>
          ))}
        </StyledUl>
      </FilterByAssets>
    </Filter>
  );
};
