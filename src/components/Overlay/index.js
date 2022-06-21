/* eslint-disable no-unused-vars */
import { useRef, useEffect } from 'react';

import { AnimatePresence } from 'framer-motion';

import { Container, ModalBox } from './style';

const bezier = [0.4, 0, 0.2, 1];

const Overlay = ({ children, isOpen, closeFn, dark, duration, blur, inDelay, outDelay }) => {
    const node = useRef();

    dark = dark || 0.5;
    duration = duration || 0.3;
    blur = blur || 3;
    inDelay = inDelay || 0;
    outDelay = outDelay || 0;

    closeFn = closeFn || new Function();

    useEffect(() => {
        const handleClickOutSide = (e) => {
            if (node.current.contains(e.target) && node.current == e.target) {
                closeFn();
            }
        };

        document.addEventListener('click', handleClickOutSide);

        return () => {
            document.removeEventListener('click', handleClickOutSide);
        };
    });

    return (
        <AnimatePresence>
            {isOpen && (
                <Container
                    ref={node}
                    initial={{ background: `rgba(0, 0, 0, 0)`, backdropFilter: `blur(${blur}px)` }}
                    animate={{
                        background: `rgba(0, 0, 0, ${dark})`,
                        transition: { duration: duration, ease: bezier, delay: inDelay },
                    }}
                    exit={{
                        background: `rgba(0, 0, 0, 0)`,
                        backdropFilter: 'blur(0px)',
                        transition: { duration: duration, ease: bezier, delay: outDelay },
                    }}
                >
                    <ModalBox
                        initial={{ opacity: 0, transform: 'translateY(-40px)' }}
                        animate={{
                            opacity: 1,
                            transform: 'translateY(0px)',
                            transition: { duration: duration, ease: bezier, delay: inDelay },
                        }}
                        exit={{
                            opacity: 0,
                            transform: 'translateY(40px)',
                            transition: { duration: duration, ease: bezier, delay: outDelay },
                        }}
                    >
                        {children}
                    </ModalBox>
                </Container>
            )}
        </AnimatePresence>
    );
};

export default Overlay;
