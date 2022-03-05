import React from 'react';
import Editor from '@monaco-editor/react';
import { Select } from 'antd';
import './index.scss';
import { CheckOutlined } from '@ant-design/icons';

const { Option } = Select;

const App: React.FC = () => {
  return (
    <div className="App">
      <Select
        defaultValue={'javascript'}
        style={{ width: 200, margin: 20 }}
        menuItemSelectedIcon={<CheckOutlined />}
      >
        {['C++', 'Java', 'Python', 'Python3', 'C', 'C#', 'javascript', 'TypeScript'].map(lang => (
          <Option value={lang} key={lang}>
            {lang}
          </Option>
        ))}
      </Select>
      <Editor
        className="editor"
        defaultLanguage={'javascript'}
        defaultValue={'// value'}
        options={{ scrollBeyondLastLine: false, theme: 'vs-dark' }}
      />
    </div>
  );
};

export default App;
