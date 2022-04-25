import styled from "@emotion/styled";
import React from "react";
import { Color } from "../types";
import { mapColorToHex } from "../utils";

interface IAbilities {
  color?: Color;
}

const Abilities: React.FC<IAbilities> = () => {
  return (
    <Base>
      <Title color={mapColorToHex(color?.name)}></Title>
      <List>
        <ListItem>
          <Label>Label</Label>
          <Description>Description</Description>
        </ListItem>
      </List>
    </Base>
  );
};

export default Abilities;

const Base = styled.div`
  margin-top: 32px;
`;

const Title = styled.div<{ color: string }>`
  margin: 0;
  padding: 0;
  font-size: 20px;
  font-weight: bold;
  color: ${({ color }) => color};
`;

const ListItem = styled.li`
  display: flex;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0 0 0;
  ${ListItem} + ${ListItem} {
    margin-top: 12px;
  }
`;

const Label = styled.span`
  flex: 1 0 30%;
  text-transform: capitalize;
  color: #374151;
  font-size: 12px;
  font-weight: bold;
`;

const Description = styled.span`
  flex: 1 0 70%;
  font-weight: 400;
  font-size: 12px;
  color: #374151;
  word-wrap: break-word;
`;
