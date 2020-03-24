import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { PreviewButton, PreviewTypography } from '../preview';
import { Grid, Box, Typography } from '@material-ui/core';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <Typography
      component='div'
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={4}>{children}</Box>}
    </Typography>
  );
}

export function PreviewTabs(props) {
  const { tab, changeTab } = props;
  return (
    <React.Fragment>
      <div>
        <Tabs
          value={tab}
          onChange={changeTab}
          aria-label='simple tabs example'
          centered
        >
          <Tab label='Item One' />
          <Tab label='Buttons' />
          <Tab label='Typography' />
          <Tab label='Alerts' />
        </Tabs>
        <TabPanel value={tab} index={0}>
          item one
        </TabPanel>
        <TabPanel value={tab} index={1}>
          <Grid item xs={12}>
            <PreviewButton />
          </Grid>
        </TabPanel>
        <TabPanel value={tab} index={2}>
          <Grid item xs={12}>
            <PreviewTypography />
          </Grid>
        </TabPanel>
        <TabPanel value={tab} index={3}>
          Alerts
        </TabPanel>
      </div>
    </React.Fragment>
  );
}
