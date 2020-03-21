import React from 'react';
import saveAs from 'file-saver';
import { createMuiTheme } from '@material-ui/core/styles';

export const Download = props => {
  // const defaultTheme = createMuiTheme();
  console.log('PROPS IN DOWNLOAD', props);

  const download = async theme => {
    const fileToSave = new Blob([JSON.stringify(theme)], {
      type: 'application/json',
      name: 'theme.json',
    });
    return await saveAs(fileToSave, 'theme.json');
  };
  return (
    <div>
      <button onClick={() => download(props.customTheme)}>DOWNLOAD</button>
    </div>
  );
};

export default Download;
