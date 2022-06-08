import { useState, useRef } from 'react';

import { useClickOutside } from '../../hooks';
import { error } from '../../utils/toaster';
import {
    Container,
    Title,
    Row,
    DetailText,
    StyledButton,
    StyledInput,
    InputContainer,
} from './style';

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import BookIcon from '@mui/icons-material/Book';

const ClassSection = ({ className, fullClassName, lecture, isEnroll }) => {
    const [open, setOpen] = useState(false);
    const buttonRef = useRef();
    const inputRef = useRef();

    useClickOutside(buttonRef, () => {
        if (open == true) {
            setOpen(false);
        }
    });

    const openEnroll = () => {
        if (!isEnroll) {
            inputRef.current.select();
            setOpen(true);
        }
    };

    const enroll = () => {
        if (!isEnroll && open) {
            error('Wrong enroll key!');
            inputRef.current.value = '';
        }
    };

    return (
        <Container isEnroll={isEnroll}>
            <Title>{className}</Title>
            <Row>
                <BookIcon />
                <DetailText>{fullClassName}</DetailText>
            </Row>
            <Row>
                <AccountBoxIcon />
                <DetailText>{lecture}</DetailText>
            </Row>
            <Row onClick={openEnroll} ref={buttonRef} gap="0px">
                <InputContainer open={open}>
                    <StyledInput ref={inputRef} type="password" placeholder="Enroll Key" />
                </InputContainer>
                <StyledButton open={open} onClick={enroll} isEnroll={isEnroll}>
                    <span>{isEnroll ? 'Joined' : 'Enroll'}</span>
                    <ArrowCircleRightIcon />
                </StyledButton>
            </Row>
        </Container>
    );
};

export default ClassSection;