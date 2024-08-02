import React from "react";
import PropTypes from 'prop-types';
import AdminTable from "./table/AdminTable";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { adminFunctions } from "./adminData";


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const Admin = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };   
      
    const adminTables = adminFunctions.map((a, index) => 
        <CustomTabPanel value={value} index={index}>
            <h2>{a.title}</h2>
            <AdminTable rows={a.data}/>
        </CustomTabPanel>

    )

    return (
            <Box sx={{ width: '100%' }}>
                <h1 style={{padding: '1em'}}>Admin Dashboard</h1>
                <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
                    <Tabs value={value} onChange={handleChange}>
                        <Tab label={adminFunctions[0].title} {...a11yProps(0)} />
                        <Tab label={adminFunctions[1].title} {...a11yProps(1)} />
                        <Tab label={adminFunctions[2].title} {...a11yProps(2)} />                  
                    </Tabs>
                </Box>
                {adminTables}
            </Box>
    );
};

export default Admin;
