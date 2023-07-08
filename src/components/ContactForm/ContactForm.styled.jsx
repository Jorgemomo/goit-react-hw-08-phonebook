import styled from '@emotion/styled';

export const Form = styled.form`
  margin-top: 10px;
  margin-bottom: 20px;
  border-radius: 10px;
  padding: 10px;
  box-shadow: var(--boxShadow);
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 20px;
  align-items: center;
`;

export const Input = styled.input`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2px;
  padding: 10px;
  width: 60%;
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
    /* outline-color: var(--accentColor); */
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    border: 2px solid rgb(22, 2, 2);
  }

  &: nth-last-child(2) {
    margin-bottom: 35px;
  }
`;

export const Button = styled.button`
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
