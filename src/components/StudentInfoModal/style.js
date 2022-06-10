import styled from 'styled-components';

import { COLOR } from '../../utils/color';

export const Container = styled.div`
    width: 600px;
    height: auto;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
    border-radius: 4px;
    background-color: ${COLOR.primary02};
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    display: grid;
    grid-template-columns: auto 1fr;
`;

export const StudentAvatar = styled.div`
    max-width: 200px;
    height: auto;
    border-right: 1px solid ${COLOR.gray[3]};
    svg {
        width: 100%;
        height: auto;
        border-radius: 50%;
    }
`;

export const StudentContent = styled.div`
    max-width: 100%;
    padding: 10px 20px;
    display: grid;
    row-gap: 20px;
`;
export const Row = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;
export const Column = styled.div`
    font-size: 1.2rem;
`;
