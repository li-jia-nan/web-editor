import React from 'react';
import Editor from '@monaco-editor/react';
import './index.scss';

interface Props {
  value: string | undefined;
  setValue: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const EditorView: React.FC<Props> = ({ value, setValue }) => {
  return (
    <div className="editorView">
      <Editor
        defaultLanguage={'javascript'}
        defaultValue={value}
        options={{ scrollBeyondLastLine: false, theme: 'vs-dark' }}
        onChange={setValue}
      />
    </div>
  );
};

export default EditorView;
