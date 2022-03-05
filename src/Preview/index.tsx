import React from 'react';
import Highlight from 'react-highlight';
import 'highlight.js/styles/default.css';
import './index.scss';

interface Props {
  value: string | undefined;
}

const Preview: React.FC<Props> = ({ value }) => {
  return (
    <div className="preview">
      <Highlight className="javascript">{value}</Highlight>
    </div>
  );
};

export default Preview;
