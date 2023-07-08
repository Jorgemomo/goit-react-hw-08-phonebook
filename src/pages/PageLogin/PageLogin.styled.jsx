import styled from '@emotion/styled';

export const PageLoginSection = styled.section`
  display: block;
  min-width: 440px;
  margin: 0 auto;
  margin-top: 20px;
  /* padding: 20px; */

  width: 80%;
  margin: 1em auto;
  padding: 1em;
  border-radius: 10px;
  background: lightblue;
  box-shadow: 0 0 0 1px rgb(194, 192, 184) inset,
    0 5px 0 -3px rgb(194, 192, 184);
`;

export const PageLoginTitle = styled.h1`
  font-size: 16px;
  text-align: center;
  margin: 0;
  margin-bottom: 20px;
`;

export const PageHomeLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  align-items: center;
`;

export const PageHomeInput = styled.input`
  width: 60%;
  padding: 12px 20px;
  margin: 8px 0 20px;
  display: inline-block;
  box-sizing: border-box;
  transition: background-color 0.5s ease-in-out;
  border: 2px solid blue;
  border-radius: 20px;
  cursor: pointer;
  font-size: 15px;
  box-shadow: 17px 17px 84px 18px rgba(21, 15, 15, 0.2) inset;

  &::placeholder {
    color: #ffffff;
    font-style: italic;
  }

  &:focus {
    background-color: #f9f1f1;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    border: 2px solid rgb(22, 2, 2);
  }
`;

export const PageHomeBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100%;
  padding: 5px;
  border-radius: 20px;
  color: #ffffff;
  cursor: pointer;
  font-size: 15px;
  box-shadow: 17px 17px 84px 18px rgba(21, 15, 15, 0.2) inset;
  border: 2px solid blue;
  background-color: lightblue;

  &:hover,
  &:focus {
    background: rgba(73, 155, 234, 1);
  }
`;
