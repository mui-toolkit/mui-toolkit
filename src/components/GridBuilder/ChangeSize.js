import React, { useState } from 'react';
import {
  Grid,
  Typography,
  Link,
  MenuItem,
  FormControl,
  Button,
  Select,
} from '@material-ui/core/';

export const ChangeSize = props => {
  const { size, setSize, handleChangeSize, grpI, itemI, item, list } = props;

  let params = { grpI, itemI };

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleChange = e => {
    setSize(e.target.value);
    handleChangeSize(e, params, e.target.value);
  };

  return (
    <div>
      <FormControl>
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={list[grpI].items[itemI].cols}
          onChange={handleChange}
        >
          <MenuItem
            style={{ color: '#000', backgroundColor: '#fff' }}
            value={1}
          >
            1
          </MenuItem>
          <MenuItem
            style={{ color: '#000', backgroundColor: '#fff' }}
            value={2}
          >
            2
          </MenuItem>
          <MenuItem
            style={{ color: '#000', backgroundColor: '#fff' }}
            value={3}
          >
            3
          </MenuItem>
          <MenuItem
            style={{ color: '#000', backgroundColor: '#fff' }}
            value={4}
          >
            4
          </MenuItem>
          <MenuItem
            style={{ color: '#000', backgroundColor: '#fff' }}
            value={5}
          >
            5
          </MenuItem>
          <MenuItem
            style={{ color: '#000', backgroundColor: '#fff' }}
            value={6}
          >
            6
          </MenuItem>
          <MenuItem
            style={{ color: '#000', backgroundColor: '#fff' }}
            value={7}
          >
            7
          </MenuItem>
          <MenuItem
            style={{ color: '#000', backgroundColor: '#fff' }}
            value={8}
          >
            8
          </MenuItem>
          <MenuItem
            style={{ color: '#000', backgroundColor: '#fff' }}
            value={9}
          >
            9
          </MenuItem>
          <MenuItem
            style={{ color: '#000', backgroundColor: '#fff' }}
            value={10}
          >
            10
          </MenuItem>
          <MenuItem
            style={{ color: '#000', backgroundColor: '#fff' }}
            value={11}
          >
            11
          </MenuItem>
          <MenuItem
            style={{ color: '#000', backgroundColor: '#fff' }}
            value={12}
          >
            12
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
