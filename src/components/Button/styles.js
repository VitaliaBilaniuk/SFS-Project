import styled from "styled-components";

const colorGrey = '#E3E3E3';
const colorWhite = '#FFFFFF';
const colorRed = '#F14F51';

export const SfsButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  line-height: 1;
  color: ${colorRed};
  padding: 20px 40px;
  background-color: ${colorWhite};
  border: 1px solid ${colorGrey};
  border-radius: 3px;
  cursor: pointer;
`

