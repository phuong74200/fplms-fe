import styled from 'styled-components';

import { COLOR } from '../../../utils/color';

export const PageBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    cursor: pointer;
    color: ${({ isActive }) => (isActive == true ? COLOR.primary02 : COLOR.blue[0])};
    background-color: ${({ isActive }) => (isActive == true ? COLOR.blue[0] : COLOR.primary02)};
    border-right: 1px solid ${COLOR.gray[4]};
    transform: scale(${({ isActive }) => (isActive == true ? 1.2 : 1.0)});
    transition-duration: 0.3s;
    z-index: ${({ isActive }) => (isActive == true ? 99 : 1)};

    :hover {
        transform: scale(1.2);
        transition-duration: 0.3s;
        background-color: ${COLOR.blue[0]};
        color: ${COLOR.primary02};
        z-index: 99;
    }
`;
