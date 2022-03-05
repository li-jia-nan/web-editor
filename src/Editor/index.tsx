import React from 'react';
import Editor from '@monaco-editor/react';
import './index.scss';

interface Props {
  defaultLanguage: string;
  value: string | undefined;
  setValue: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const EditorView: React.FC<Props> = ({ defaultLanguage, value, setValue }) => {
  const defaultValue = `// 当前环境语言是 ${defaultLanguage}`;
  return (
    <div className="editorView">
      <Editor
        defaultLanguage={defaultLanguage}
        defaultValue={value || defaultValue}
        options={{ scrollBeyondLastLine: false, theme: 'vs-dark' }}
        onChange={setValue}
      />
    </div>
  );
};

export default EditorView;
