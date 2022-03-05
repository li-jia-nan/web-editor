import React, { useState } from 'react';
import { Select } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import EditorView from './Editor';
import Preview from './Preview';
import './index.scss';

const { Option } = Select;

const lang = ['C++', 'Java', 'Python', 'Python3', 'C', 'C#', 'javascript', 'TypeScript'];

const App: React.FC = () => {
  const [value, setValue] = useState<string | undefined>('');
  const [defaultLanguage, setDefaultLanguage] = useState<string>('javascript');
  return (
    <div className="App">
      <Select
        defaultValue={defaultLanguage}
        style={{ width: 200, margin: 20 }}
        menuItemSelectedIcon={<CheckOutlined />}
        onChange={setDefaultLanguage}
      >
        {lang.map(lang => (
          <Option value={lang} key={lang}>
            {lang}
          </Option>
        ))}
      </Select>
      <div className="content">
        <EditorView defaultLanguage={defaultLanguage} value={value} setValue={setValue} />
        <Preview defaultLanguage={defaultLanguage} value={value} />
      </div>
    </div>
  );
};

export default App;
