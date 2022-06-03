import { useEffect, useState } from 'react';

import { Container, OptContainer, Option, Selected } from './style';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Selection = () => {
    const [isDisplay, setDisplay] = useState(false);
    const [click, setClick] = useState(0);
    const [data, setData] = useState('Selected Role');

    const handleClick = () => {
        setClick(click + 1);
    };
    useEffect(() => {
        if (click == 1) {
            setDisplay(true);
        } else {
            setDisplay(false);
            setClick(0);
        }
    }, [click]);
    return (
        <>
            <Container onClick={handleClick}>
                <Selected>
                    <Option>{data}</Option>
                    <KeyboardArrowDownIcon />
                </Selected>
                <OptContainer isDisplay={isDisplay}>
                    <Option onClick={() => setData('Leader')}>Leader</Option>
                    <Option onClick={() => setData('Member')}>Member</Option>
                </OptContainer>
            </Container>
        </>
    );
};

export default Selection;
