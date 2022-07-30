import styled, { keyframes } from 'styled-components';

import { COLOR } from '../../../utils/style';

const scaleIn = (to, from) => keyframes`
    0%{
        transform: scale(0.3);
        top: ${from.y}px;
        left: ${from.x}px;
    }
    50%{
        transform: scale(0.7);
        top: ${to.y}px;
        left: ${to.x}px;
    }
    100%{
        transform: scale(1);
        top: 50%;
        left: 50%;
        right: 50%;
        bottom: 50%;
        transform: translate(-50%, -50%);
    }
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.1);
`;

export const Wrapper = styled.div`
    position: absolute;
    top: ${({ from }) => from.y || 0}px;
    left: ${({ from }) => from.x || 0}px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ w }) => `${w}px` || '200px'};
    height: ${({ h }) => `${h}px` || '100px'};
    background-color: #fff;
    z-index: 999;
    border-radius: 4px;
    animation: ${({ to, from }) => scaleIn(to, from)} 1.5s ease-in-out forwards;
    color: ${COLOR.primary02};

    background: linear-gradient(
        135deg,
        rgba(153, 179, 251, 1) 0%,
        rgba(184, 202, 252, 1) 29%,
        rgba(195, 210, 253, 1) 61%,
        rgba(238, 242, 255, 1) 100%
    );
    padding: 5px 0 20px;
`;

export const Container = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const SemsterCode = styled.h1`
    margin: 0;
    font-size: 1.2rem;
    font-weight: 700;
`;

export const InputDate = styled.div`
    display: flex;
    gap: 15px;
    font-size: 1rem;
    margin-bottom: 10px;
    input[type='date'] {
        cursor: pointer;
        border: 2px solid ${COLOR.blue[2]};
        border-radius: 4px;
        font-family: 'Lato';
        color: ${COLOR.primary03};
    }
`;

export const ButtonList = styled.div`
    display: flex;
    gap: 15px;
`;

export const Button = styled.button`
    outline: none;
    border-radius: 4px;
    padding: 5px 15px;
    color: ${COLOR.primary03};
    font-weight: 550;
    cursor: pointer;
    transition: all 200ms ease-in-out;
    :hover {
        transform: scale(1.08);
    }

    &:first-child {
        color: ${COLOR.green[0]};
        border: 2px solid ${COLOR.green[0]};
        :hover {
            color: ${COLOR.primary02};
            background-color: ${COLOR.green[0]};
        }
    }
    &:nth-child(2) {
        color: ${COLOR.red[2]};
        border: 2px solid ${COLOR.red[2]};
        :hover {
            color: ${COLOR.primary02};
            background-color: ${COLOR.red[2]};
        }
    }
`;