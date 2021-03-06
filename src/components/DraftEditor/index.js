/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';

import {
    Editor,
    EditorState,
    convertToRaw,
    ContentState,
    RichUtils,
    convertFromRaw,
    getVisibleSelectionRect,
    Modifier,
} from 'draft-js';

import { useMousePosition } from '../../hooks';
import { ToolBar } from './style';

import { faBold, faItalic, faList, faListOl } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BackupIcon from '@mui/icons-material/Backup';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import 'draft-js/dist/Draft.css';

const save = (id, blocks) => {
    const draft = localStorage.getItem('draft');
    localStorage.setItem(
        'draft',
        JSON.stringify({
            ...draft,
            [id]: blocks,
        })
    );
};

const DraftEditor = ({
    editorRef,
    initBlocks,
    readonly,
    placeholder,
    editorState,
    setEditorState,
    readOnly,
}) => {
    const [toolBar, setToolBar] = useState({
        top: 0,
        left: 0,
        isOpen: false,
    });

    const [letters, setLetters] = useState(0);

    // const checkSave = () => {
    //     const text = editorState.getCurrentContent().getPlainText('\u0001');
    //     if (text.length - letters > 100) {
    //         setLetters(text.length);
    //         if (id) {
    //             const blocks = convertToRaw(editorState.getCurrentContent());
    //             save(id, blocks);
    //         }
    //     }
    // };

    const onChange = (editorState) => {
        const blocks = convertToRaw(editorState.getCurrentContent());
        const selectionState = editorState.getSelection();
        const anchorKey = selectionState.getAnchorKey();
        const start = selectionState.getStartOffset();
        const end = selectionState.getEndOffset();
        const offset = getVisibleSelectionRect(window);
        if (anchorKey && start != end) {
            setToolBar({
                ...toolBar,
                top: offset?.top,
                left: offset?.left + offset?.width / 2,
                isOpen: true,
            });
        } else {
            setToolBar({
                ...toolBar,
                isOpen: false,
            });
        }
        // checkSave();
        if (setEditorState) setEditorState(editorState);
    };

    const handleKeyCommand = (command, editorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            onChange(newState);
            return 'handled';
        }
        return 'not-handled';
    };

    const handleBeforeInput = (chars, editorState) => {
        const currentContentState = editorState.getCurrentContent();
        const selectionState = editorState.getSelection();

        onChange(
            EditorState.push(
                editorState,
                Modifier.replaceText(currentContentState, selectionState, chars)
            )
        );

        return 'handled';
    };

    const utils = [
        {
            icon: <FontAwesomeIcon icon={faBold} />,
            fn: () => {
                const nextState = RichUtils.toggleInlineStyle(editorState, 'BOLD');
                setEditorState(nextState);
            },
        },
        {
            icon: <FontAwesomeIcon icon={faItalic} />,
            fn: () => {
                const nextState = RichUtils.toggleInlineStyle(editorState, 'ITALIC');
                setEditorState(nextState);
            },
        },
        {
            icon: <FontAwesomeIcon icon={faList} />,
            fn: () => {
                const nextState = RichUtils.toggleBlockType(editorState, 'unordered-list-item');
                setEditorState(nextState);
            },
        },
        {
            icon: <FontAwesomeIcon icon={faListOl} />,
            fn: () => {
                const nextState = RichUtils.toggleBlockType(editorState, 'ordered-list-item');
                setEditorState(nextState);
            },
        },
    ];

    return (
        <>
            <ToolBar top={toolBar.top} left={toolBar.left} isOpen={toolBar.isOpen || false}>
                {utils.map((util, index) => (
                    <button key={index} onMouseDown={(e) => e.preventDefault()} onClick={util.fn}>
                        {util.icon}
                    </button>
                ))}
            </ToolBar>
            <Editor
                ref={editorRef}
                editorState={editorState}
                onChange={onChange}
                handleKeyCommand={handleKeyCommand}
                handleBeforeInput={handleBeforeInput}
                placeholder={placeholder}
                readOnly={readOnly}
            />
        </>
    );
};

export const DraftRenderer = ({ editorState }) => {
    return <Editor editorState={editorState} readOnly></Editor>;
};

export default DraftEditor;
