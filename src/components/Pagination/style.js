import styled from 'styled-components';

import { COLOR } from '../../utils/color';

const Container = styled.div`
    width: fit-content;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    border: 1px solid ${COLOR.gray[4]};
    border-radius: 4px;
    position: absolute;
    right: 0;
    * {
        box-sizing: border-box;
    }
    svg {
        background-color: ${COLOR.primary02};
        color: ${COLOR.blue[0]};
        :hover {
            transform: scale(1.2);
            transition-duration: 0.3s;
            background-color: ${COLOR.blue[0]};
            cursor: pointer;
            color: ${COLOR.primary02};
            z-index: 99;
        }
    }
`;

export { Container };
