import React from 'react';

import { Box, Tab, Tabs, Typography } from '@material-ui/core';

import { Container, AppBarContainer } from './styles';
import User from '../User';
import Repository from '../Repository';
import Follow from '../Follow';

interface TabPanelProps {
  children: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const Dashboard: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container>
      <AppBarContainer position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="standard"
          scrollButtons="off"
          centered
        >
          <Tab label="Início" {...a11yProps(0)} />
          <Tab label="Repositórios" {...a11yProps(1)} />
          <Tab label="Seguidores" {...a11yProps(2)} />
          <Tab label="Seguindo" {...a11yProps(3)} />
        </Tabs>
      </AppBarContainer>
      <TabPanel value={value} index={0}>
        <User />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Repository />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Follow isFollowers />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Follow isFollowers={false} />
      </TabPanel>
    </Container>
  );
};

export default Dashboard;
