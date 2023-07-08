import styled from '@emotion/styled';

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;

export const MenuTitle = styled.p`
  font-size: 16px;
  font-weight: 800;
  margin: 0;
  color: var(--primaryTextColor);
  transition: all 0.5s ease;
  text-shadow: 2px 2px 4px blue;
`;

export const MenuBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100%;
  padding: 5px;
  border-radius: 20px;
  font-weight: 600;
  color: var(--bgColorform);
  cursor: pointer;
  font-size: 15px;
  border: 2px solid rgb(252, 6, 6);

  &:hover,
  &:focus {
    background-color: var(--bgColorform);
    color: var(--primaryTextColor);
  }
`;
