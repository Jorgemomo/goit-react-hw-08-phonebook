import styled from '@emotion/styled';

export const PageHomeSection = styled.section`
  display: block;
  min-width: 440px;
  margin: 0 auto;
  margin-top: 20px;
  width: 80%;
  margin: 1em auto;
  padding: 1em;
  border-radius: 10px;
  background-color: lightblue;
  box-shadow: 0 0 0 1px rgb(194, 192, 184) inset,
    0 5px 0 -3px rgb(194, 192, 184);
`;

export const PageHomeTitle = styled.h1`
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--primaryTextColor);
  transition: all 0.5s ease;
  text-shadow: 2px 2px 4px blue;
  margin-bottom: 55px;
`;
export const PageHomeTitle2 = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 20px;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(230, 69, 29, 1) 99%,
    rgba(0, 212, 255, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const PageHomeText = styled.p`
  margin-bottom: 30px;
  text-align: center;
`;
