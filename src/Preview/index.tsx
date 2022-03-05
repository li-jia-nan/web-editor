import React from 'react';
import Highlight from 'react-highlight';
import 'highlight.js/styles/default.css';
import './index.scss';

interface Props {
  value: string | undefined;
  defaultLanguage: string;
}

const Preview: React.FC<Props> = ({ value, defaultLanguage }) => {
  return (
    <div className="preview">
      <Highlight className={defaultLanguage}>{value}</Highlight>
    </div>
  );
};

export default Preview;
