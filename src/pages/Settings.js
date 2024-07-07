import React, { useState } from 'react';
import { Button, FormControl, InputLabel, Select, MenuItem, Switch, FormGroup, FormControlLabel } from '@mui/material';

const Settings = () => {
  const [theme, setTheme] = useState('light');
  const [notifications, setNotifications] = useState(true);

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  const handleNotificationsChange = (event) => {
    setNotifications(event.target.checked);
  };

  return (
    <div>
      <h1>Settings</h1>
      <FormControl fullWidth margin="normal">
        <InputLabel>Theme</InputLabel>
        <Select value={theme} onChange={handleThemeChange}>
          <MenuItem value="light">Light</MenuItem>
          <MenuItem value="dark">Dark</MenuItem>
        </Select>
      </FormControl>

      <FormGroup>
        <FormControlLabel
          control={
            <Switch checked={notifications} onChange={handleNotificationsChange} />
          }
          label="Enable Notifications"
        />
      </FormGroup>

      <Button variant="contained" color="primary">
        Save Settings
      </Button>
    </div>
  );
};

export default Settings;
