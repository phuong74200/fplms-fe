import { useState } from 'react';

import { Editor, EditorState } from 'draft-js';

import 'draft-js/dist/Draft.css';

function DraftEditor() {
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

    return <Editor editorState={editorState} onChange={setEditorState} />;
}

export default DraftEditor;
