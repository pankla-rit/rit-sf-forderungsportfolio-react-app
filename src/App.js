// App.js
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import CustomTabs from './CustomTabs';
import TabPanel from './TabPanel';

const App = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Definiere deine Tabs – hier mit Label und Inhalt
  const tabs = [
    { label: 'Tab 1', content: 'Hier steht irgendwas für Tab 1' }
  ];

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ width: '100%', p: 2, fontFamily: 'Arial, sans-serif' }}>
      <CustomTabs tabs={tabs} value={activeTab} handleChange={handleChange} />
      {tabs.map((tab, index) => (
        <TabPanel key={index} value={activeTab} index={index}>
          {tab.content}
        </TabPanel>
      ))}
    </Box>
  );
};

export default App;