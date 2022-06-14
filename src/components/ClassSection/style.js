import styled, { keyframes } from 'styled-components';

import { COLOR } from '../../utils/style';

export const Container = styled.div`
    width: 100%;
    height: auto;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: green;
    box-sizing: border-box;
    background: ${({ isEnroll }) => (isEnroll ? COLOR.green[5] : COLOR.blue[5])};
    position: relative;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

    * {
        box-sizing: border-box;
        font-size: 1rem;
        color: ${COLOR.primary03};
    }
`;

export const Title = styled.div`
    font-weight: bold;
`;

export const Row = styled.div`
    display: flex;
    gap: ${({ gap }) => gap || '8px'};
    align-items: center;
`;

export const DetailText = styled.div`
    color: ${COLOR.primary03};
`;

export const InputContainer = styled.div`
    width: ${({ open }) => (open ? '100%' : '0')};
    overflow: hidden;
    height: 100%;
    transition: all 0.3s;
`;

export const StyledInput = styled.input`
    border: 2px solid ${COLOR.blue[0]};
    padding: 0 0.5rem;
    outline: none;
    width: 100%;
    border-radius: 4px 0 0 4px;
    height: 100%;
    box-sizing: border-box;
    background: transparent;
    color: ${COLOR.blue[0]};
    ::placeholder {
        font-family: Lato;
    }
`;

export const StyledButton = styled.div`
    padding: ${({ open }) => (open ? '0.5rem' : '0.5rem 1rem')};
    border-radius: ${({ open }) => (open ? '0 4px 4px 0px' : '4px')};
    border: none;
    background: ${({ isEnroll }) => (isEnroll ? COLOR.green[0] : COLOR.blue[0])};
    color: ${COLOR.primary02};
    max-width: 100px;
    width: ${({ open }) => (open ? '31px' : '70px')};
    height: auto;
    user-select: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
    span {
        color: white;
        display: block;
        width: ${({ open }) => (!open ? '100%' : '0px')};
        overflow: hidden;
        transition: all 0.3s;
        text-align: center;
    }
    svg {
        width: ${({ open }) => (open ? '17px' : '0px')};
        height: 17px;
        fill: ${COLOR.primary02};
        overflow: hidden;
        transition: all 0.3s;
    }
    :active {
        background: ${COLOR.blue[1]};
    }
`;

const placeHolderShimmer = keyframes`
    0%{
        background-position: -468px 0
    }
    100%{
        background-position: 468px 0
    }
`;

export const SkeletonContainer = styled.div`
    background: #f6f7f8;
    min-height: 195px;
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 0.5rem;
`;

export const HolderItem = styled.div`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    animation-duration: 2s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: ${placeHolderShimmer};
    animation-timing-function: linear;
    background: #f6f7f8;
    background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
    background-size: 1000px 104px;
`;
