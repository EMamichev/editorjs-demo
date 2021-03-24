import React, {useRef, useState} from 'react';
import EditorJs from 'react-editor-js';
import {tools} from "./tools";
import './index.css'

const key = 'editor'

const getInitialData = () => {
    const data = window.localStorage.getItem(key)
    if (data) {
        return (JSON.parse(data))
    }
    return {blocks: []}
}

const ReactEditor = () => {
    const [isEditorReady, setIsEditorReady] = useState(false)
    const [data] = useState(getInitialData())
    const editorRef=useRef()

    const handleSave = (data) => {
        console.log('SAVED', JSON.stringify(data, null, 2))
        window.localStorage.setItem(key, JSON.stringify(data))
    }

    return (
        <div>
            <EditorJs autofocus={true} onReady={() => setIsEditorReady(true)} tools={tools} data={data} instanceRef={instance => editorRef.current = instance}/>
            {isEditorReady &&
            <button className={'button'} onClick={() => editorRef.current?.save().then(handleSave)}>Сохранить</button>}
        </div>
    );
};

export default ReactEditor;