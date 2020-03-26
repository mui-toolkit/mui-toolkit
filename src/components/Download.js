import React from 'react';
import saveAs from 'file-saver';
import Button from '@material-ui/core/Button';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    marginRight: '20px',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    fontWeight: 400,
    textTransform: 'none',
    borderRadius: 5,
    height: 46,
    padding: 10,
  },
}));

export const Download = props => {
  const classes = useStyles();
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
      <Button
        variant='outlined'
        style={{
          fontFamily: 'Roboto',
          fontSize: 14,
          marginTop: '1em',
          marginBottom: '1em',
          color: '#3f51b5',
        }}
        onClick={() => download(props.downloadTheme)}
        className={classes.button}
      >
        Download <SaveAltIcon style={{ marginLeft: '5px' }} />
      </Button>
    </div>
  );
};

export default Download;
