import React, { useState } from 'react';
import styled from 'styled-components';
import { SelectItem } from '../../navbar';
import { IconDown } from '../Icon';
interface DropMenuProps {
  isVisible: boolean;
}

declare type PageProps = {
  item: SelectItem;
  lists: SelectItem[];
  handleSelect: (list: SelectItem) => void;
};
const DropDownMenu = styled.div`
  font-size: 15px;
  line-height: 18px;
  position: relative;
  cursor: pointer;

  > p {
    border-radius: 5px;
    border: 1px solid #dddddd;
    width: 143px;
    display: flex;
    align-items: center;
    padding: 7px 10px;
    svg {
      margin-left: auto;
    }
  }
  img {
    margin-right: 10px;
  }
`;

const DropDown = styled.div<DropMenuProps>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
  flex-direction: column;
  border: 1px solid #dddddd;
  background: #eee;
  border: 1px solid #ddd;
  z-index: 10;

  div {
    display: flex;
    align-items: center;
    padding: 8px;
  }
`;

const DropDownBackdrop = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
`;

export const CustomDropDown = ({ item, lists, handleSelect }: PageProps) => {
  const [openSelect, setOpenSelect] = useState<boolean>(false);

  return (
    <DropDownMenu>
      <p
        onClick={() => {
          setOpenSelect(!openSelect);
        }}
      >
        <img src={item.icon} alt={item.name} />
        {item.name}
        <IconDown />
      </p>

      <DropDown isVisible={openSelect}>
        <DropDownBackdrop
          onClick={() => {
            setOpenSelect(false);
          }}
        />
        {lists.map((list: SelectItem, index: number) => (
          <div
            key={`network-${index}`}
            onClick={() => {
              setOpenSelect(false);
              handleSelect(list);
            }}
          >
            <img src={list.icon} alt={list.name} />
            {list.name}
          </div>
        ))}
      </DropDown>
    </DropDownMenu>
  );
};
