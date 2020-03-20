import React from 'react';
import saveAs from 'file-saver';
import { createMuiTheme } from '@material-ui/core/styles';

export const Download = () => {
  const defaultTheme = createMuiTheme();

  const download = async theme => {
    const fileToSave = new Blob([JSON.stringify(theme)], {
      type: 'application/json',
      name: 'theme.json',
    });
    return await saveAs(fileToSave, 'theme.json');
  };
  return (
    <div>
      <button onClick={() => download(defaultTheme)}>DOWNLOAD</button>
    </div>
  );
};

export default Download;
