import styled from "styled-components";
import { NavLink } from 'react-router-dom';

const colorGrey = '#E3E3E3';
const colorWhite = '#ffffff';

export const SfsHeader = styled.header`
    display: flex;
    align-items: center;
    padding: 20px 40px;
    background-color: ${colorWhite};
    border-bottom: 1px solid ${colorGrey};
`

export const SfsLogoLink = styled(NavLink)`
    display: flex;
`
